import { h, init, classModule, propsModule, eventListenersModule, styleModule, attributesModule, datasetModule } from 'snabbdom';

const snabbDom = {
  h: h,
  classModule: classModule,
  propsModule: propsModule,
  eventListenersModule: eventListenersModule,
  styleModule: styleModule,
  attributesModule: attributesModule,
  datasetModule: datasetModule,
  init: init
};

module.export = snabbDom;
global.SnabbDom = snabbDom;
