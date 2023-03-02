import { useState } from "react"

export default function ImageSearch({searchText}) {
    const [text, setText] = useState('')

    const onSubmit = (e) => { // passar variavel de um elemento filho para um elemento pai
        e.preventDefault()
        // quando a página for atualiza, toricamente o valor vai para default, essa função
        // impede isso de acontecer

        searchText(text)
    }

    return (
        <div className="max-w-sm rounded overflow-hidden mb-10 pt-10 mx-auto">
            <form onSubmit={onSubmit} action="" className="w-full max-w-sm">
                <div className="flex w-full items-center border-b-2 border-cyan-500 py-2">
                    <input onChange={e => setText(e.target.value)} type="text" className="appearance-none bg-transparent border-none w-full text-gray-300 mr-3 py-1 px-2 leading-tight focus:outline-none" />
                    <button className="flex-shrink-0 bg-cyan-500 hover:bg-cyan-700 border-cyan-500 hover:border-cyan-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                        Search
                    </button>
                </div>
            </form>
        </div>
    )
}