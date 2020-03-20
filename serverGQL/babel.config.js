/* eslint-disable @typescript-eslint/explicit-function-return-type */
module.exports = api => {
  api.cache(true)

  const presets = ['@mhirba/next']

  return { presets }
}
