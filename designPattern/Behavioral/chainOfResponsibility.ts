/***
 * Chain of Responsibility Pattern
 * Definition: The Chain of Responsibility Pattern is a behavioral design pattern that allows an object to pass a request along a chain of potential 
 * handlers until one of them handles the request.
 * This pattern decouples the sender of a request from its receivers by giving multiple objects a chance to handle the request.
 */

// Handler interface
interface IAuthHandler {
    setNext(handler: IAuthHandler): IAuthHandler;
    handle(request: AuthRequest): AuthResponse;
}

// Request and Response types
interface AuthRequest {
    username: string;
    password: string;
    ipAddress: string;
    userAgent: string;
    timestamp: Date;
}

interface AuthResponse {
    success: boolean;
    message: string;
    handled: string;
}

// Abstract handler
abstract class BaseAuthHandler implements IAuthHandler {
    private nextHandler: IAuthHandler | null = null;

    setNext(handler: IAuthHandler): IAuthHandler {
        this.nextHandler = handler;
        return handler;
    }

    handle(request: AuthRequest): AuthResponse {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return {
            success: false,
            message: "End of chain reached",
            handled: "none"
        };
    }
}

// Concrete handlers
class RateLimitHandler extends BaseAuthHandler {
    private attempts: Map<string, number> = new Map();
    private readonly MAX_ATTEMPTS = 3;

    handle(request: AuthRequest): AuthResponse {
        const key = `${request.ipAddress}-${request.username}`;
        const attempts = this.attempts.get(key) || 0;

        if (attempts >= this.MAX_ATTEMPTS) {
            return {
                success: false,
                message: "Too many attempts. Please try again later.",
                handled: "RateLimitHandler"
            };
        }

        this.attempts.set(key, attempts + 1);
        return super.handle(request);
    }
}

class BlacklistHandler extends BaseAuthHandler {
    private blacklistedIPs = new Set(['192.168.1.100', '10.0.0.50']);

    handle(request: AuthRequest): AuthResponse {
        if (this.blacklistedIPs.has(request.ipAddress)) {
            return {
                success: false,
                message: "IP address is blacklisted",
                handled: "BlacklistHandler"
            };
        }
        return super.handle(request);
    }
}

class CredentialsHandler extends BaseAuthHandler {
    private validCredentials = new Map([
        ['admin', 'admin123'],
        ['user', 'user123']
    ]);

    handle(request: AuthRequest): AuthResponse {
        const validPassword = this.validCredentials.get(request.username);
        
        if (!validPassword || validPassword !== request.password) {
            return {
                success: false,
                message: "Invalid credentials",
                handled: "CredentialsHandler"
            };
        }
        return {
            success: true,
            message: "Authentication successful",
            handled: "CredentialsHandler"
        };
    }
}

// Usage
const rateLimit = new RateLimitHandler();
const blacklist = new BlacklistHandler();
const credentials = new CredentialsHandler();

rateLimit.setNext(blacklist).setNext(credentials);

// Test cases
const requests = [
    {
        username: "admin",
        password: "admin123",
        ipAddress: "192.168.1.1",
        userAgent: "Mozilla",
        timestamp: new Date()
    },
    {
        username: "admin",
        password: "wrong",
        ipAddress: "192.168.1.100",
        userAgent: "Chrome",
        timestamp: new Date()
    },
    {
        username: "user",
        password: "user123",
        ipAddress: "192.168.1.1",
        userAgent: "Firefox",
        timestamp: new Date()
    }
];

requests.forEach(request => {
    console.log(`\nTrying request from ${request.ipAddress} for user ${request.username}`);
    console.log(rateLimit.handle(request));
});

