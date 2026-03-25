export const phoneConfig = {
  CO: {
    length: 10,
    format: (v) => {
      if (v.length <= 3) return `(${v}`;
      if (v.length <= 6) return `(${v.slice(0,3)}) ${v.slice(3)}`;
      return `(${v.slice(0,3)}) ${v.slice(3,6)} ${v.slice(6,10)}`;
    },
    placeholder: "(300) 123 4567"
  },

  US: {
    length: 10,
    format: (v) => {
      if (v.length <= 3) return `(${v}`;
      if (v.length <= 6) return `(${v.slice(0,3)}) ${v.slice(3)}`;
      return `(${v.slice(0,3)}) ${v.slice(3,6)}-${v.slice(6,10)}`;
    },
    placeholder: "(555) 123-4567"
  },

  ES: {
    length: 9,
    format: (v) => {
      if (v.length <= 3) return v;
      if (v.length <= 6) return `${v.slice(0,3)} ${v.slice(3)}`;
      return `${v.slice(0,3)} ${v.slice(3,6)} ${v.slice(6,9)}`;
    },
    placeholder: "612 345 678"
  }
};