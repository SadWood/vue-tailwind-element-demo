const postcssImport = require('postcss-import')
const autoprefixer = require('autoprefixer')()
const tailwindcss = require('tailwindcss')('./tailwind.config.js')
const postcssPurgecss = require(`@fullhuman/postcss-purgecss`)

const purgecss = postcssPurgecss({
  // Specify the paths to all of the template files in your project
  content: [
    './public/**/*.html',
    './src/**/*.vue'
    // etc.
  ],
  // 添加element-ui的类为白名单
  // Whitelist auto generated classes for transitions and router links.
  whitelistPatterns: [
    /el-.+$/,
    /-(leave|enter|appear)(|-(to|from|active))$/,
    /^(?!(|.*?:)cursor-move).+-move$/,
    /^router-link(|-exact)-active$/
  ],
  whitelistPatternsChildren: [/el-.+$/],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
  plugins: [
    postcssImport,
    autoprefixer,
    tailwindcss,
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])
  ]
}
