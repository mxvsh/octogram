import { TelegramClient } from 'telegram'
import { StringSession } from 'telegram/sessions'
import { login } from './providers/login'

const { SESSION, API_ID, API_HASH } = process.env

class Octogram {
  private client?: TelegramClient
  private token?: string
  login = login

  constructor(token?: string) {
    this.token = token
  }

  async launch() {
    if (!this.token) {
      await this.login()
    }

    const parse = this.token?.split(':') || []

    if (parse?.length !== 3) {
      console.error('Invalid token')
      process.exit(1)
    }

    const app = {
      id: Number(parse[0]),
      hash: parse[1],
      session: parse[2],
    }

    const stringSession = new StringSession(app.session)

    this.client = new TelegramClient(stringSession, app.id, app.hash, {})

    await this.client?.start({ botAuthToken: '' })
  }
}

export { Octogram }
