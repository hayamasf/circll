export function formatEntityName(entity: {
  isPrefixEntityType?: boolean | null, entityType?: string | null, name: string, tradeName?: string | null}) {
    const {isPrefixEntityType, entityType, name, tradeName} = entity;

    if(isPrefixEntityType && entityType) {
      return `${entityType}${name}`;
    } else if (entityType) {
      return `${name}${entityType}`
    } else if (!entityType) {
      return `${name}/${tradeName}`
    }
    return name
  
}