// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    'no-console': 'warn',
    'vue/html-indent': ['error', 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: false,
      ignores: []
    }],
    'vue/script-indent': ['error', 2, { baseIndent: 1 }],
    'quotes': ['error', 'single', { avoidEscape: true }],
    'vue/html-closing-bracket-newline': ['error', {
        singleline: 'never',
        multiline: 'always',
        selfClosingTag: {
          singleline: 'never',
          multiline: 'always'
        }
      }
    ],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 1
      },
      multiline: {
        max: 1
      }
    }],
    'vue/multiline-html-element-content-newline': ['error', {
      allowEmptyLines: true
    }],
    'vue/no-v-html': 'off',
    'vue/no-child-content': ['error'],
    'vue/no-multiple-template-root': 'off',
    semi: ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'vue/mustache-interpolation-spacing': ['error', 'always']
  },
});
