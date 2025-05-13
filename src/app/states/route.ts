import { handleResponse, readJsonFile, verifyAuthorization } from '@/lib/utils';
import { NextRequest } from 'next/server';
import { State } from '@/types/TStates';

export async function GET(request: NextRequest,
    { params }: { params: Promise<{ country_id: number, query?: string }> }) {

    // const authHeader = request.headers.get('authorization');
    // if (authHeader !== `Bearer ${process.env.AUTH_SECRET}`) {
    //     return new Response('Unauthorized', {
    //         status: 401,
    //     });
    // }

    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');
    const country_id = searchParams.get('country_id');

    let data: State[] = await readJsonFile('states.json');
    data = data.filter((city) => city.country_id === Number(country_id));

    if (query) {
        data = data.filter((state) =>
            state.name.toLowerCase().includes(query.toLowerCase())
        );
    }

    return handleResponse(data);
}