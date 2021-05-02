export const rerenderPropsList = [
  'src',
  'active',
  'disabled',
  'width',
  'height',
  'imgWidth',
  'fillColor',
  'strokeColor',
  'lineWidth',
  'natural',
  'areaKeyName',
  'stayHighlighted',
  'stayMultiHighlighted',
  'toggleHighlighted',
  'parentWidth',
  'responsive',
];

export const ImageMapperDefaultProps = {
  src: {
    type: String,
    required: true,
  },
  map: {
    type: Object,
    required: true,
  },
  areaKeyName: {
    type: String,
    default: 'id',
  },
  containerRef: {
    type: Object,
    default: null,
  },
  active: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  fillColor: {
    type: String,
    default: 'rgba(255, 255, 255, 0.5)',
  },
  strokeColor: {
    type: String,
    default: 'rgba(0, 0, 0, 0.5)',
  },
  lineWidth: {
    type: Number,
    default: 1,
  },
  imgWidth: {
    type: Number,
    default: 0,
  },
  width: {
    type: Number,
    default: 0,
  },
  height: {
    type: Number,
    default: 0,
  },
  natural: {
    type: Boolean,
    default: false,
  },
  stayHighlighted: {
    type: Boolean,
    default: false,
  },
  stayMultiHighlighted: {
    type: Boolean,
    default: false,
  },
  toggleHighlighted: {
    type: Boolean,
    default: false,
  },
  rerenderProps: {
    type: Array,
    default: [],
  },
  responsive: {
    type: Boolean,
    default: false,
  },
  parentWidth: {
    type: Number,
    default: 0,
  },

  onImageClick: {
    type: Object,
    default: null,
  },
  onImageMouseMove: {
    type: Object,
    default: null,
  },
  onClick: {
    type: Object,
    default: null,
  },
  onMousedown: {
    type: Object,
    default: null,
  },
  onMouseup: {
    type: Object,
    default: null,
  },
  onTouchstart: {
    type: Object,
    default: null,
  },
  onTouchend: {
    type: Object,
    default: null,
  },
  onMousemove: {
    type: Object,
    default: null,
  },
  onMouseenter: {
    type: Object,
    default: null,
  },
  onMouseleave: {
    type: Object,
    default: null,
  },
  onLoad: {
    type: Object,
    default: null,
  },
};
