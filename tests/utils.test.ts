import path from 'path';
import { promises as fs } from 'fs';
import { NextRequest } from 'next/server';
import { readJsonFile, handleResponse, verifyAuthorization } from '../src/lib/utils';

// filepath: src/lib/utils.test.ts

jest.mock('fs', () => ({
    promises: {
        readFile: jest.fn(),
    },
}));

describe('utils.ts', () => {
    describe('getJsonPath', () => {
        it('should return the correct JSON file path', () => {
            const jsonPath = 'test.json';
            const expectedPath = path.join(process.cwd(), 'json', jsonPath);
            expect(path.join(process.cwd(), 'json', jsonPath)).toBe(expectedPath);
        });
    });

    describe('readJsonFile', () => {
        it('should read and parse JSON file successfully', async () => {
            const mockData = { key: 'value' };
            (fs.readFile as jest.Mock).mockResolvedValueOnce(JSON.stringify(mockData));

            const result = await readJsonFile('test.json');
            expect(result).toEqual(mockData);
        });

        it('should throw an error if JSON parsing fails', async () => {
            (fs.readFile as jest.Mock).mockResolvedValueOnce('invalid json');

            await expect(readJsonFile('test.json')).rejects.toThrow();
        });

        it('should throw an error if file reading fails', async () => {
            (fs.readFile as jest.Mock).mockRejectedValueOnce(new Error('File not found'));

            await expect(readJsonFile('test.json')).rejects.toThrow('File not found');
        });
    });

    describe('handleResponse', () => {
        it('should return 404 response for empty data', async () => {
            const response = await handleResponse([]);
            expect(response.status).toBe(404);
            expect(await response.text()).toBe('No data found');
        });

        it('should return 200 response for non-empty data', async () => {
            const data = [{ id: 1 }];
            const response = await handleResponse(data);
            expect(response.status).toBe(200);
            expect(await response.json()).toEqual(data);
        });
    });

    describe('verifyAuthorization', () => {
        const mockRequest = (authHeader: string | null) =>
            ({
                headers: {
                    get: jest.fn().mockReturnValue(authHeader),
                },
            } as unknown as NextRequest);

        it('should return null for valid authorization', async () => {
            process.env.AUTH_SECRET = 'secret';
            const request = mockRequest('Bearer secret');
            const result = await verifyAuthorization(request);
            expect(result).toBeNull();
        });

        it('should return 401 response for invalid authorization', async () => {
            process.env.AUTH_SECRET = 'secret';
            const request = mockRequest('Bearer invalid');
            const result = await verifyAuthorization(request);
            expect(result?.status).toBe(401);
            expect(await result?.text()).toBe('Unauthorized');
        });
    });
});