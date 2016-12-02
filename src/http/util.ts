declare let Zone;

export const identityFactory = (provide, obj) => ({
  provide,
  useFactory: proxy => proxy,
  deps: [obj]
});

export function getContext() {
  return Zone.current.getZoneWith('context').get('context');
};
