import { createServerApp } from 'core'
import routes from '@/routes'
import { build } from 'tsup'

build({
  watch: true,
  dts: false,
  outDir: 'dist',
  splitting: true,
  clean: true,
  format: ['iife'],
  ignoreWatch: ['dist'],
  platform: 'browser',
  entryPoints: ['src/entry.client.ts']
}).then(() => {
  createServerApp(routes)
})
