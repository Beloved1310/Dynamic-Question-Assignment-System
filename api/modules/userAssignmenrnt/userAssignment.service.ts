
import { logger } from "../../utils/logger";
import { questionRepository } from '../question/question.repository';
import { questionService } from '../question/question.service';
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
  if (!users) {
    console.log(`No user exist`);
    return;
  }
  users?.forEach(async (user) => {
    // Here we would update the user's current question, but for simplicity:
    logger.info(`Assigned question "${question.content}" to user ${user.email}`);
  });
};
