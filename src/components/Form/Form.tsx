import React, { FC} from 'react';
import style from './Form.module.scss'


type Props = {
  title?: string,
  setSelectedNote: React.Dispatch<React.SetStateAction<number | null | undefined>>
}

const Form: FC<Props> = ({setSelectedNote}) => {
  return (
    <>
      <div className="buttons">
        <button onClick={() => setSelectedNote(null)} className={style.button}>	&larr;</button>
      </div>
      <form className={style.form}>
        <input type='text' className={style.title} placeholder='Заголовок'></input>
        <textarea className={style.text} placeholder='Заметка'></textarea>
      </form>
    </>

  )
}

export default Form