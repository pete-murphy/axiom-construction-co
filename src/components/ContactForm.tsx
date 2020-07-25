import React, { useState, ChangeEventHandler, FormEventHandler } from "react"
import { navigate } from "gatsby"
import { stringify } from "query-string"

import { getColor, Color } from "lib/colors"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

export const ContactForm = () => {
  const [email, handleChangeEmail] = useFormInput("")
  const [name, handleChangeName] = useFormInput("")
  const [town, handleChangeTown] = useFormInput("")
  const [state, handleChangeState] = useFormInput("MA")
  const [message, handleChangeMessage] = useFormInput("")

  const handleSubmit: FormEventHandler = e => {
    e.preventDefault()

    // Submit form using Netlify
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: stringify({
        "form-name": "contact",
        name,
        email,
        town,
        state,
        message,
      }),
    })
      .then(_ => {
        navigate("/success")
      })
      .catch(_ => {
        navigate("/error")
      })
  }
  return (
    <form
      css={css`
        display: grid;
        grid-template-columns: max-content 3fr max-content 1fr;
        grid-gap: 1rem;
        margin-bottom: 1rem;
        min-width: 50%;
        max-width: 32rem;
      `}
      name="contact"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <div
        css={css`
          display: none;
        `}
      >
        <input type="text" name="bot-field" />
      </div>
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
        <select name="state" value={state} onChange={handleChangeState}>
          {STATES.map(state => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </Label>
      <Label>
        <span>
          Message <em>optional</em>
        </span>
        <textarea
          name="message"
          value={message}
          onChange={handleChangeMessage}
        />
      </Label>
      <div
        css={css`
          display: flex;
          /* justify-content: flex-end;
          grid-column: -2 / -1; */
        `}
      >
        <button
          css={css`
            padding: 1rem 2rem;
            font-weight: 600;
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
): [
  string,
  ChangeEventHandler<HTMLSelectElement & HTMLInputElement & HTMLTextAreaElement>
] => {
  const [state, setState] = useState<string>(initialState)
  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    e.persist()
    setState(_ => e.target.value)
  }
  return [state, handleChange]
}

const Label = styled.label<{ span?: number }>`
  display: grid;
  grid-column: span ${p => p.span || 4};
  align-items: center;
  input,
  textarea {
    grid-column: span ${p => (p.span || 4) - 1};
    resize: none;
  }
  color: ${getColor(Color.Gray700)};
`

const STATES = ["CT", "MA", "ME", "NH", "NY", "RI", "VT"]
