import './formComponent.css';

export const Input = ({label, type, name, placeholder, value, onChange, required}) =>{
    return(
        <div className="input">
            <p>{label}{required ? '*':''}</p>
            <input type={type} name={name} placeholder={placeholder} value={value} onChange={(e)=>onChange(e.target.name, e.target.value)} />
        </div>
    )
}

export const Button = ({text, onClick}) =>{
    return(
        <div className='button-div'>
            <button className='button' onClick={onClick}>{text}</button>
        </div>
    )
}