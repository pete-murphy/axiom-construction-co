import React, { useState, ChangeEventHandler, FormEventHandler } from "react"
import styled, { css } from "styled-components"
import { getColor, Color } from "lib/colors"

export const ContactForm = () => {
  const [email, handleChangeEmail] = useFormInput("")
  const [name, handleChangeName] = useFormInput("")
  const [town, handleChangeTown] = useFormInput("")
  const [state, handleChangeState] = useFormInput("")
  const [description, handleChangeDescription] = useFormInput("")

  // const onSubmit: FormEventHandler = e => {
  //   console.log({
  //     email,
  //     name,
  //     town,
  //     state,
  //     description,
  //   })
  // }
  return (
    <form
      css={css`
        display: grid;
        grid-template-columns: max-content 3fr max-content 1fr;
        grid-gap: 1rem;
        margin-bottom: 1rem;
      `}
      name="contact"
      method="post"
      action="/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <Label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
        />
      </Label>
      <Label>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
        />
      </Label>
      <Label span={2}>
        Town
        <input
          type="text"
          name="town"
          value={town}
          onChange={handleChangeTown}
        />
      </Label>
      <Label span={2}>
        State
        <input
          type="text"
          name="state"
          value={state}
          onChange={handleChangeState}
        />
      </Label>
      <Label>
        Description
        <textarea
          name="description"
          value={description}
          onChange={handleChangeDescription}
        />
      </Label>
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
          grid-column: -2 / -1;
        `}
      >
        <button
          css={css`
            padding: 0.5rem 1rem;
            background: ${getColor(Color.Yellow400)};
          `}
        >
          Submit
        </button>
      </div>
    </form>
  )
}

const useFormInput = (
  initialState: string
): [string, ChangeEventHandler<HTMLInputElement & HTMLTextAreaElement>] => {
  const [state, setState] = useState<string>(initialState)
  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    e.persist()
    setState(_ => e.target.value)
  }
  return [state, handleChange]
}

const Label = styled.label<{ span?: number }>`
  display: grid;
  grid: inherit;
  grid-gap: inherit;
  grid-template-columns: subgrid;
  grid-column: span ${p => p.span || 4};
  align-items: center;
  input,
  textarea {
    grid-column: span ${p => (p.span || 4) - 1};
    resize: none;
  }
`
