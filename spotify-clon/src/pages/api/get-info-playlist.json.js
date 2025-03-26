import { allPlaylists, songs as allSongs } from "../../lib/data";

export async function GET({ params, request }) {
    //get id form the urls search params
    const { url } = request;
    //una forma de hacerlo
    // const [, querystring] = url.split('?');
    // const searchParams = new URLSearchParams
    //ahora vamos a usar otra mas sencilla
    const urlObject = new URL(url);
    const id = urlObject.searchParams.get('id');

    const playlist = allPlaylists.find((playlist) => playlist.id === id);
    const songs = allSongs.filter(song => song.albumId === playlist?.albumId)

    return new Response(JSON.stringify({ playlist, songs }), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}