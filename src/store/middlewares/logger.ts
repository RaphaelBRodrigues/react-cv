import { IDefaultAction } from '@Store/interface';

const logger = (state: any) => (next: Function) => (action: IDefaultAction) => {
  console.group(action.type);
  console.info('Action:');
  console.table(action);
  console.info('PREV_STATE', state.getState());
  const result = next(action);
  console.info('NEW_STATE', state.getState());
  console.groupEnd();
  return result;
};

export default logger;
