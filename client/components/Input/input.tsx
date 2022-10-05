
export const InputField = (label:string, placeholder:string, type:string) => {

    return (
        <div className="flex flex-col">
            <label className="pt-5 pb-3">{label}</label>
            <input
                placeholder={placeholder}
                type={type}
                className="
                bg-[#f8f8f8]
                outline
                outline-offset-1
                outline-1
                outline-[#dadada]
                rounded-lg
                text-[#32323b]
                px-2.5
                py-3.5
                h-auto
                focus:bg-white
                focus:outline-[#33cccc]
                ease-in
                duration-200
                "
            />
        </div>
    )

}