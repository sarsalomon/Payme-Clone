export const Button = (color:string, textcolor:string, outlinecolor:string, ripplecolor:string, text:string) => {

    return (
        <button type="button" className="
        cursor-pointer
        mt-10
        p-3
        px-10
        border
        border-1
        rounded-lg
        text-black
        outline-none
        hover:shadow-lg
        hover:border-[#33cccc]
        transition
        duration-500
        ">
            {text}
        </button>
    )


}