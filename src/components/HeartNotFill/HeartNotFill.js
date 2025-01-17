import "./HeartNotFill.css";

export function HeartNotFill(props) {

    const modificarFav = () => {
        props.actualizaFavorito(!props.favorito);
    }

    return(
        <svg xmlns="http://www.w3.org/2000/svg" onClick={modificarFav} class="icon icon-tabler icon-tabler-heart" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
    )
}