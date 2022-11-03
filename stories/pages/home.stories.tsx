import PocketBase from "pocketbase";
import { Test } from "../../components/Test";
import { serialize } from "next-mdx-remote/serialize";
import codeFrontmatter from "remark-code-frontmatter";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const object = {
  compiledSource:
    '/*@jsxRuntime automatic @jsxImportSource react*/\nconst {Fragment: _Fragment, jsx: _jsx, jsxs: _jsxs} = arguments[0];\nconst {useMDXComponents: _provideComponents} = arguments[0];\nfunction _createMdxContent(props) {\n  const _components = Object.assign({\n    h2: "h2",\n    p: "p",\n    h3: "h3",\n    blockquote: "blockquote",\n    span: "span"\n  }, _provideComponents(), props.components), {Title} = _components;\n  if (!Title) _missingMdxReference("Title", true, "22:1-22:44");\n  return _jsxs(_Fragment, {\n    children: [_jsx(_components.h2, {\n      children: "The quick brown fox jumps over the lazy dog"\n    }), "\\n", _jsx(_components.p, {\n      children: "Sem quis aliquam, etiam sit lectus. Eu morbi commodo massa turpis porttitor. Feugiat cras viverra aliquet amet in lacinia tellus eu. Nibh enim, nulla sit nulla pellentesque orci leo justo in. Volutpat ut pulvinar nulla risus dignissim quam et nec est. Nisi, mauris malesuada lacus diam amet, vel. Id habitasse bibendum blandit non viverra amet fermentum dapibus. Tincidunt eu gravida varius lectus vel vel sed. Vestibulum at eu odio quisque vulputate adipiscing massa, tempor. Condimentum nulla mauris arcu mauris. Sed ut sit a, nibh etiam pulvinar odio donec diam."\n    }), "\\n", _jsx(_components.h2, {\n      children: "A red flare silhouetted the jagged edge of a wing."\n    }), "\\n", _jsx(_components.p, {\n      children: "Magna commodo nisi, donec habitasse lacus elit sed ac quis. Egestas mauris ac ut sagittis, in. Viverra eu fermentum, mauris erat ipsum lectus hac posuere. Amet ut sed scelerisque mauris, nibh fringilla vestibulum. Sit nisl et pharetra pharetra mi viverra. Nisl non mattis ut vel proin euismod."\n    }), "\\n", _jsx(_components.h3, {\n      children: "All their equipment"\n    }), "\\n", _jsx(_components.p, {\n      children: "Turpis vulputate orci, lacus aliquet dolor molestie tincidunt a, egestas. Iaculis nec posuere non molestie cursus. Mi massa sed sed quisque ipsum ornare id. Sit nulla varius sit blandit quis enim, mauris quis. Vitae pretium et facilisis amet, vel sit odio eget."\n    }), "\\n", _jsx(_components.h3, {\n      children: "Instruments are alive"\n    }), "\\n", _jsx(_components.p, {\n      children: "In urna risus morbi sit nunc iaculis. A elementum non sapien sapien ut integer pretium id. Euismod et faucibus amet, pellentesque senectus mauris amet. Pulvinar lorem velit, ac quam molestie."\n    }), "\\n", _jsxs(_components.blockquote, {\n      children: ["\\n", _jsx(_components.p, {\n        children: "Mist enveloped the ship three hours out from port."\n      }), "\\n"]\n    }), "\\n", _jsx(_components.p, {\n      children: "Magna commodo nisi, donec habitasse lacus elit sed ac quis. Egestas mauris ac ut sagittis, in. Viverra eu fermentum, mauris erat ipsum lectus hac posuere. Amet ut sed scelerisque mauris, nibh fringilla vestibulum. Sit nisl et pharetra pharetra mi viverra. Nisl non mattis ut vel proin euismod."\n    }), "\\n", _jsx(Title, {\n      title: "This is the first project"\n    }), "\\n", _jsxs(_components.p, {\n      children: ["inline ", _jsx("span", {\n        role: "img",\n        "aria-label": "party popper",\n        children: _jsx(_components.span, {\n          role: "img",\n          "aria-label": "party popper",\n          children: "🎉"\n        })\n      }), " emoji"]\n    })]\n  });\n}\nfunction MDXContent(props = {}) {\n  const {wrapper: MDXLayout} = Object.assign({}, _provideComponents(), props.components);\n  return MDXLayout ? _jsx(MDXLayout, Object.assign({}, props, {\n    children: _jsx(_createMdxContent, props)\n  })) : _createMdxContent(props);\n}\nreturn {\n  default: MDXContent\n};\nfunction _missingMdxReference(id, component, place) {\n  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it." + (place ? "\\nIt’s referenced in your code at `" + place + "`" : ""));\n}\n',
  frontmatter: {
    projectId: 1,
    title: "This is the first project",
    abstract:
      "Tincidunt eu gravida varius lectus vel vel sed. Vestibulum at eu odio quisque vulputate adipiscing massa, tempor.",
    client: "ACME Corp",
    role: "Co-founder & CEO",
    date: "2017-06-07",
    categories: [
      "Strategy",
      "Branding",
      "Product Design",
      "Marketing",
      "Development",
    ],
    image: "https://source.unsplash.com/1920x1080/?space",
    isPublished: true,
  },
  scope: {},
};

export default {
  title: "Pages/Test",
  component: Test,
} as ComponentMeta<typeof Test>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Test> = (args) => <Test {...args} />;

export const Component = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Component.args = {
  test: object,
};
