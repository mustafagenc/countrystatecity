import path from 'path';
import { promises as fs } from 'fs';
import { NextRequest } from 'next/server';

function getJsonPath(jsonPath: string): string {
    const applicationsPath = path.join(
        process.cwd(),
        'json',
        jsonPath
    );
    return applicationsPath;
}

async function readJsonFile(jsonPath: string): Promise<any> {
    try {
        const applicationsPath = getJsonPath(jsonPath);
        const file = await fs.readFile(applicationsPath, 'utf8');
        try {
            return JSON.parse(file);
        } catch (parseError) {
            console.error('Error parsing JSON file:', parseError);
            throw parseError;
        }
    } catch (error) {
        console.error('Error reading JSON file:', error);
        throw error;
    }
}

async function handleResponse(data: any): Promise<Response> {
    if (data.length === 0) {
        return new Response('No data found', {
            status: 404,
        });
    }

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}

async function verifyAuthorization(request: NextRequest): Promise<Response | null> {
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.AUTH_SECRET}`) {
        return new Response('Unauthorized', {
            status: 401,
        });
    }
    return null;
}

export { readJsonFile, handleResponse, verifyAuthorization };