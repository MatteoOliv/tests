import axios from "axios";
import { NextResponse } from "next/server";
import { parse } from "url";
const API_ENDPOINT = "https://mttlioitimpeuzlwsgql.supabase.co/rest/v1/movies";
const API_KEY: string = process.env.API_KEY as string;

const headers = {
    "Content-Type": "application/json",
    apiKey: API_KEY,
};

export async function GET(request: Request) {
    const {
        query: { limit, offset },
    } = parse(request.url, true);
    const res = await fetch(`${API_ENDPOINT}?limit=${limit}&offset=${offset}`, {
        headers,
    });
    const movies = await res.json();

    return NextResponse.json(movies);
}
