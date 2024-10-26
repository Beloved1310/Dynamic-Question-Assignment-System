import { CronJob } from 'cron';
import { assignQuestionsToUsers } from '../api/modules/userAssignmenrnt/userAssignment.service';
import { Regions } from './constants/region';
import { logger } from './utils/logger';

const scheduleQuestionRotation = () => {
  const job = new CronJob(
    '0 19 * * 1', // Every Monday at 7pm SGT
    async () => {
      logger.info("Running weekly question rotation job...");
      await assignQuestionsToUsers(Regions.SINGAPORE);
      await assignQuestionsToUsers(Regions.US);
    },
    null,
    true,
    'Asia/Singapore'
  );

  job.start();
};

export default scheduleQuestionRotation;
