const postcss = require("postcss");
const postcssImport = require("postcss-import");
const tailwindcss = require("@tailwindcss/postcss");

const allPlugins = require("./output/allPlugins");
const blockSizeStyles = require("./output/blockSize");
const borderColorStyles = require("./output/borderColor");
const borderRadiusStyles = require("./output/borderRadius");
const borderWidthStyles = require("./output/borderWidth");
const divideWidthStyles = require("./output/divideWidth");
const inlineSizeStyles = require("./output/inlineSize");
const insetStyles = require("./output/inset");
const marginStyles = require("./output/margin");
const maxBlockSizeStyles = require("./output/maxBlockSize");
const maxInlineSizeStyles = require("./output/maxInlineSize");
const minBlockSizeStyles = require("./output/minBlockSize");
const minInlineSizeStyles = require("./output/minInlineSize");
const nonconfigurableStyles = require("./output/nonconfigurable");
const paddingStyles = require("./output/padding");
const spaceBetweenStyles = require("./output/spaceBetween");

/*
  This "all plugins" test was made because PostCSS was giving me an issue where
  it would always return the output from the first call. For example, if I ran
  generatePluginCss on the nonconfigurable styles, and then the block-size
  styles, the block-size test would fail because it would test against the
  output of the nonconfigurable plugin. I couldn't find a way to run multiple
  tests in a single run.

  So if this all plugins test ever fails, we can enable one of the individual
  plugin tests at a time to help narrow down where the issue is. I hope to fix
  this at some point but I don't have a solution yet.
*/
describe("all plugins at once", () => {
  const generatePluginCss = () => {
    return postcss([postcssImport, tailwindcss()])
      .process(
        `@import "tailwindcss" source("./templates"); @plugin "../index.js";`,
        {
          from: "./tests/templates",
        },
      )
      .then((result) => result.css);
  };

  describe("all plugins", () => {
    const testAllPlugins = () => {
      return generatePluginCss().then((css) => {
        expect(css).toMatchCss(allPlugins);
      });
    };

    test("default mode", () => testAllPlugins());
  });
});

describe.skip("individual plugin tests", () => {
  const generatePluginCss = (templateDirectory) => {
    return postcss([postcssImport, tailwindcss()])
      .process(
        `@import "tailwindcss" source("./templates/${templateDirectory}"); @plugin "../index.js";`,
        {
          from: "./tests/templates",
        },
      )
      .then((result) => result.css);
  };

  describe.skip("resize and overscroll-behavior", () => {
    const testNonconfigurableStyles = () => {
      return generatePluginCss("nonconfigurable").then((css) => {
        expect(css).toMatchCss(nonconfigurableStyles);
      });
    };

    test("default mode", () => testNonconfigurableStyles());
  });

  describe.skip("block-size", () => {
    const testBlockSize = () => {
      return generatePluginCss("blockSize").then((css) => {
        expect(css).toMatchCss(blockSizeStyles);
      });
    };

    test("default mode", () => testBlockSize());
  });

  describe.skip("min-block-size", () => {
    const testMinBlockSize = () => {
      return generatePluginCss("minBlockSize").then((css) => {
        expect(css).toMatchCss(minBlockSizeStyles);
      });
    };

    test("default mode", () => testMinBlockSize());
  });

  describe.skip("max-block-size", () => {
    const testMaxBlockSize = () => {
      return generatePluginCss("maxBlockSize").then((css) => {
        expect(css).toMatchCss(maxBlockSizeStyles);
      });
    };

    test("default mode", () => testMaxBlockSize());
  });

  describe.skip("inline-size", () => {
    const testInlineSize = () => {
      return generatePluginCss("inlineSize").then((css) => {
        expect(css).toMatchCss(inlineSizeStyles);
      });
    };

    test("default mode", () => testInlineSize());
  });

  describe.skip("min-inline-size", () => {
    const testMinInlineSize = () => {
      return generatePluginCss("minInlineSize").then((css) => {
        expect(css).toMatchCss(minInlineSizeStyles);
      });
    };

    test("default mode", () => testMinInlineSize());
  });

  describe.skip("max-inline-size", () => {
    const testMaxInlineSize = () => {
      return generatePluginCss("maxInlineSize").then((css) => {
        expect(css).toMatchCss(maxInlineSizeStyles);
      });
    };

    test("default mode", () => testMaxInlineSize());
  });

  describe.skip("margin shorthand and single-side", () => {
    const testMargin = () => {
      return generatePluginCss("margin").then((css) => {
        expect(css).toMatchCss(marginStyles);
      });
    };

    test("default mode", () => testMargin());
  });

  describe.skip("padding shorthand and single-side", () => {
    const testPadding = () => {
      return generatePluginCss("padding").then((css) => {
        expect(css).toMatchCss(paddingStyles);
      });
    };

    test("default mode", () => testPadding());
  });

  describe.skip("inset shorthand and single-side", () => {
    const testInset = () => {
      return generatePluginCss("inset").then((css) => {
        expect(css).toMatchCss(insetStyles);
      });
    };

    test("default mode", () => testInset());
  });

  describe.skip("space between", () => {
    const testSpaceBetween = () => {
      return generatePluginCss("spaceBetween").then((css) => {
        expect(css).toMatchCss(spaceBetweenStyles);
      });
    };

    test("default mode", () => testSpaceBetween());
  });

  describe.skip("border-width", () => {
    const testBorderWidth = () => {
      return generatePluginCss("borderWidth").then((css) => {
        expect(css).toMatchCss(borderWidthStyles);
      });
    };

    test("default mode", () => testBorderWidth());
  });

  describe.skip("border-color", () => {
    const testBorderColor = () => {
      return generatePluginCss("borderColor").then((css) => {
        expect(css).toMatchCss(borderColorStyles);
      });
    };

    test("default mode", () => testBorderColor());
  });

  describe.skip("border-radius side and corner", () => {
    const testBorderRadius = () => {
      return generatePluginCss("borderRadius").then((css) => {
        expect(css).toMatchCss(borderRadiusStyles);
      });
    };

    test("default mode", () => testBorderRadius());
  });

  describe.skip("divide width", () => {
    const testDivideWidth = () => {
      return generatePluginCss("divideWidth").then((css) => {
        expect(css).toMatchCss(divideWidthStyles);
      });
    };

    test("default mode", () => testDivideWidth());
  });
});
