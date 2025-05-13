import { Country } from '@/types/TCountry';
import { handleResponse, readJsonFile, verifyAuthorization } from '@/lib/utils';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest,
    { params }: { params: Promise<{ query?: string }> }) {

    verifyAuthorization(request);

    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');

    let data: Country[] = await readJsonFile('countries.json')

    if (query) {

        data = data.filter((country) =>
            country.name.toLowerCase().includes(query.toLowerCase())
        );
    }

    return handleResponse(data);
}