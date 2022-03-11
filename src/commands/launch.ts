import { Command } from 'clipanion'
import { getBrowser } from '../utils/pptr'

export default class extends Command {
  static usage = Command.Usage({
    description: 'launch pptr',
  })

  static paths = [['launch']]

  async execute() {
    const { browser } = await getBrowser()
    // operate here
  }
}
