export const getValueByKey = <T, K extends keyof T>(obj: T, key: K): T[K] =>
  obj[key];

export const getListLabelByValue = <T, K extends keyof T>(list: T[], value: T[K], labelKey?: K, valueKey?: K): T[K] => {
  const lk = labelKey || 'label' as K;
  const vk = valueKey || 'value' as K;
  const item: T | undefined = list.find((item: T) => item[vk] === value);
  if (item) {
    return item[lk];
  }

  return value;
}