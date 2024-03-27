import React, {
    ChangeEvent,
    InputHTMLAttributes,
    DetailedHTMLProps,
    HTMLAttributes,
} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
>

type SuperRadioPropsType = Omit<DefaultRadioPropsType, 'type'> & {
    options?: any[]
    onChangeOption?: (option: any) => void

    spanProps?: DefaultSpanPropsType // пропсы для спана
}

const SuperRadio: React.FC<SuperRadioPropsType> = ({
    id,
    name,
    className,
    options,
    value,
    onChange,
    onChangeOption,
    spanProps,
    ...restProps
}) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // делают студенты
        onChangeOption && onChangeOption(Number(e.currentTarget.value));
        console.log(e.currentTarget.value)
        
    }

    const finalRadioClassName = s.radio + (className ? ' ' + className : '')
    const spanClassName = s.span + (spanProps?.className ? ' ' + spanProps.className : '')
                      // name, checked, value делают студенты
                      // http://htmlbook.ru/html/input/name
                      //checked={o.id === ...может попробовать значение которое тянем из HW7?}
    const mappedOptions: any[] = options
        ? options.map((o) => (
            
              <label key={name + '-' + o.id} className={s.label}>
                  <input
                      id={id + '-input-' + o.id}
                      className={finalRadioClassName}
                      type={'radio'}
                      value={o.id}
                      name={"option"}
                      checked={o.id === value}
                      onChange={onChangeCallback}
                      {...restProps}
                  />
                  <span
                      id={id + '-span-' + o.id}
                      {...spanProps}
                      className={spanClassName}
                  >
                      {o.value}
                  </span>
              </label>
          ))
        : []
        console.log(mappedOptions)
    return <div className={s.options}>{mappedOptions}</div>
    
}

export default SuperRadio
