import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useRef } from 'react'

export default function Home() {

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  async function  save(e) {
    e.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value

    const response = await fetch('/api/products', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    })

    const data = await response.json()

  }
  return (
    <>
      <main className={styles.main}>
        <form onSubmit={save}>
          <input ref={emailRef} placeholder='Email' type="email" name='email' />
          <input ref={passwordRef} placeholder='password' type="password" name='password' />
          <button>Save</button>
        </form>
      </main>
    </>
  )
}
