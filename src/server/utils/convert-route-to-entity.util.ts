const mapping: Record<string, string> = {
  events: 'event',
  friends: 'friend',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
