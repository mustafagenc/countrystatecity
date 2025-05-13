import { handleResponse, readJsonFile, verifyAuthorization } from '@/lib/utils';
import { NextRequest } from 'next/server';
import { City } from '@/types/TCity';

export async function GET(request: NextRequest,
    { params }: { params: Promise<{ state_id: number, query?: string }> }) {

    verifyAuthorization(request);

    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');
    const state_id = searchParams.get('state_id');

    let data: City[] = await readJsonFile('cities.json')
    data = data.filter((city) => city.state_id === Number(state_id));

    if (query) {
        data = data.filter((city) =>
            city.name.toLowerCase().includes(query.toLowerCase())
        );
    }

    return handleResponse(data);
}