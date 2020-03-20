declare
import { Socket } from 'socket.io'

interface Game {
  start(): void
  end(): void
}

interface Player {
  socket: Socket
  nickname: string
  onGame: boolean
  selectedGame?: string
}
