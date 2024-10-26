# Dynamic-Question-Assignment-System
# Strategy Overview

## Design Overview

### Data Models
- **User Model**: Stores user information and regions.
- **Question Model**: Stores questions categorized by region and cycle, enabling region-specific question assignments.
- **UserAssignment Model**: Tracks each user's assigned question, making it easy to query historical assignments as needed.

### Assignment Logic

- **Question Assignment**: The `assignQuestionsToUsers` function retrieves questions by region and assigns the appropriate question based on the current cycle index. This cycle index is calculated using the current week, ensuring questions rotate on a weekly basis.
- **Flexible Configuration**: This function supports adding new regions or adjusting the rotation frequency simply by modifying the cron schedule.

### Scheduling

- **Cron Scheduling**: Using `node-cron`, question assignments are scheduled every Monday at 7 PM SGT. This timing can be adjusted based on user engagement patterns.

## Pros and Cons

### Pros
- **Scalable**: MongoDB's flexibility supports millions of users and handles region-specific assignments with ease.
- **Simple Scheduling**: The `node-cron` setup allows for easy cycle frequency adjustments without altering core logic.
- **Efficient Querying**: Indexes can be added to fields like `userId` and `region` in the `UserAssignment` model to optimize lookup performance.

### Cons
- **Single-point Scheduling**: If granular assignments per region or time zone are required, a single cron job may lack flexibility.
- **Dependence on Accurate User Data**: The `getUsersByRegion` function relies on precise, complete user data for each region, which may necessitate integration with a user management system.
git

## Potential Improvements

- **Caching**: Implement caching (e.g., using Redis) for user assignments if queried frequently.
- **Horizontal Scaling**: Enable MongoDB’s sharding capabilities to support a higher load as the user base grows.

