const heading = "";
const itemClick = (e) => console.log(e, "no props given");
const skeleton = [
  {
    layer: 1,
    name: "first",
    label: "First",
    secondary: "hello",
  },
  {
    layer: 1,
    name: "test",
    label: "Test",
    childrenElements: [
      {
        layer: 2,
        name: "test-first",
        label: "Test First",
      },
    ],
  },
  {
    name: "divider",
  },
  {
    layer: 1,
    name: "second",
    label: "Second",
    childrenElements: [
      {
        layer: 2,
        name: "second-first",
        label: "Second First",
        childrenElements: [
          {
            layer: 3,
            name: "second-first-first",
            label: "Second First First",
          },
          {
            layer: 3,
            name: "second-first-second",
          },
        ],
      },
      {
        layer: 2,
        name: "second-second",
        label: "Second Second",
        childrenElements: [
          {
            layer: 3,
            name: "second-second-first",
            label: "Second Second First",
          },
          {
            layer: 3,
            name: "second-second-second",
            label: "Second Second Second",
          },
        ],
      },
    ],
  },
];

const props = { skeleton, heading, itemClick };

export default props;
