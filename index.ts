import type { Context } from '@deepseek-ai/cordis'
import { Acryl } from 'acrylblends'

export const name = 'hello-cycle'
export const inject = ['router']

/** A greeting route: GET /hello-cycle answers JSON. */
export function apply(ctx: Context): void {
  ctx.router.route('/hello-cycle', new Acryl().get('/', (c) => c.json({ says: 'hello from the cycle test' })))
}
