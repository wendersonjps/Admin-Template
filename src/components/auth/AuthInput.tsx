interface AuthInputProps {
    label: string
    value: any
    required?: boolean
    dontRender?: boolean
    type?: 'text' | 'email' | 'password'
    valueChanged: (newValue: any) => void
}

export default function AuthInput(props: AuthInputProps) {
    return props.dontRender ? null : (
        <div className={`flex flex-col mt-4`}>
            <label>{props.label}</label>
            <input type={props.type ?? 'text'} value={props.value} onChange={e => props.valueChanged?.(e.target.value)} required={props.required} className={`px-4 py-3 mt-2 rounded-lg border bg-gray-100 focus:bg-white`} />
        </div>
    )
}