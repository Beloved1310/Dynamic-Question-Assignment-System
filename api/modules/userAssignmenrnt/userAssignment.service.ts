import { logger } from "../../utils/logger";
import { questionRepository } from '../question/question.repository';
import { userRepository } from '../user/user.repository';
import { getCurrentCycleIndex } from '../../utils/date';

export const assignQuestionsToUsers = async (region: string) => {
  const currentCycleIndex = getCurrentCycleIndex();
  const question = await questionRepository.getOneQuestion({ region, cycleIndex: currentCycleIndex });

  if (!question) {
    logger.info(`No question for region ${region} in cycle ${currentCycleIndex}`);
    return;
  }

  const users = await userRepository.getUsersByRegion({ region });
  if (!users?.length) {
    logger.info(`No users exist for region ${region}`);
    return;
  }

  await Promise.all(users.map(async (user) => {
    logger.info(`Assigned question "${question.content}" to user ${user.email}`);
  }));
};
