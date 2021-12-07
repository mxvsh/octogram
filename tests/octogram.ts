import 'dotenv/config'
import 'mocha'
import { expect } from 'chai'
import { Octogram } from '../src/octogram'

describe('Octogram', () => {
  it('should work', async () => {
    const bot = new Octogram(
      '192405:24e6f5fb10964323bef8e459828e4bcc:1BQANOTEuMTA4LjU2LjE5MQG7hG4eoG4LWKIShUeq3JCl3a8ianSCM+PEdqLh2m3zQr1AxK+Rqz+qPU2zf5mRSwzudHD7/MUYiwgZJ58qb6c4/PAdfh4/okPJNhEGEmk6eomRiLuYlQliNLI4nJ0XpOn4FZeM0FO3smjTfWe+aGfK+aQ0FJlmpE9l3T6X46kwQMJmlVgMOI+FP3IsMUULNS9MGcLpcmX5O/FC3DZ4YLBf9c+eqVks3eeHMGnTuKOp9I0+w/vhBORfmNuKJAYVnK/x7xQTNXF+sic6W6mEXgCzVka/EsW2dM9fVWW35ZBh0YGEZOQyIM8pPKdWmh8gHwJn6zeVEJv3+7Xb9p0NQAX41Q=='
    )
    await bot.launch()
  }).timeout(99999)
})
