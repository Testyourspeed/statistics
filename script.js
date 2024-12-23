const questions = [
    // Round 1
    [
        {
            question: "A dataset consists of the following values: 3, 7, 8, 10, 12, 15. What is the mean?",
            options: ["10", "9", "8", "11"],
            correct: 0,
        },
        {
            question: "Find the variance of the following dataset: 4, 7, 10, 12, 15.",
            options: ["16.8", "17.2", "18", "15"],
            correct: 0,
        },
        {
            question: "A coin is flipped 100 times and lands on heads 55 times. What is the probability of heads?",
            options: ["0.55", "0.5", "0.45", "0.6"],
            correct: 0,
        },
        {
            question: "What is the median of the following set of data: 2, 5, 7, 9, 12?",
            options: ["5", "7", "9", "12"],
            correct: 1,
        },
        {
            question: "The probability of event A is 0.6, and the probability of event B is 0.3. If events A and B are mutually exclusive, what is the probability of A or B?",
            options: ["0.9", "0.5", "0.3", "0.18"],
            correct: 0,
        },
    ],

    // Round 2
    [
        {
            question: "In a normal distribution, the mean is 50 and the standard deviation is 5. What is the z-score for a value of 60?",
            options: ["2", "1", "1.5", "0.5"],
            correct: 0,
        },
        {
            question: "The probability that a student passes an exam is 0.7. What is the probability that the student fails?",
            options: ["0.7", "0.3", "0.5", "0.2"],
            correct: 1,
        },
        {
            question: "A sample of 25 items has a mean of 12 and a standard deviation of 3. What is the standard error of the mean?",
            options: ["0.6", "0.5", "0.3", "0.2"],
            correct: 0,
        },
        {
            question: "In a regression analysis, the slope coefficient is 3, and the intercept is 2. What is the predicted value for x = 4?",
            options: ["14", "12", "10", "8"],
            correct: 0,
        },
        {
            question: "The probability of event A is 0.8, and the probability of event B is 0.5. If events A and B are independent, what is the probability of both A and B occurring?",
            options: ["0.4", "0.5", "0.3", "0.15"],
            correct: 0,
        },
    ],

    // Round 3
    [
        {
            question: "The mean of a dataset is 20, and the standard deviation is 4. What is the coefficient of variation?",
            options: ["20%", "25%", "20", "16%"],
            correct: 1,
        },
        {
            question: "What is the 95% confidence interval for a population with a sample mean of 25, a sample standard deviation of 6, and a sample size of 36?",
            options: ["(24.4, 25.6)", "(24, 26)", "(23.5, 26.5)", "(23, 27)"],
            correct: 0,
        },
        {
            question: "A box contains 5 red balls, 3 green balls, and 2 blue balls. If one ball is chosen randomly, what is the probability that it is red?",
            options: ["0.5", "0.4", "0.3", "0.6"],
            correct: 0,
        },
        {
            question: "In a sample of 100 students, 40 are female and 60 are male. What is the proportion of female students?",
            options: ["0.4", "0.6", "0.7", "0.5"],
            correct: 0,
        },
        {
            question: "A researcher conducts an experiment and obtains a p-value of 0.03. What does this suggest about the null hypothesis?",
            options: ["Reject the null hypothesis", "Fail to reject the null hypothesis", "There is no relationship between variables", "The sample size is too small"],
            correct: 0,
        },
    ],

    // Round 4
    [
        {
            question: "A dataset has the following values: 5, 7, 9, 11, 15, 16. What is the range?",
            options: ["11", "10", "12", "9"],
            correct: 0,
        },
        {
            question: "In a standard normal distribution, what is the probability that a value is between -1 and 1?",
            options: ["68%", "95%", "99%", "34%"],
            correct: 0,
        },
        {
            question: "In a survey, 80% of respondents agree with a statement. If 500 people are surveyed, how many are expected to agree?",
            options: ["400", "480", "350", "500"],
            correct: 0,
        },
        {
            question: "What is the standard deviation of the following dataset: 8, 10, 12, 15, 18?",
            options: ["3.74", "4.24", "3.24", "2.85"],
            correct: 0,
        },
        {
            question: "A random variable X follows a Poisson distribution with a mean of 5. What is the probability that X equals 3?",
            options: ["0.1404", "0.2301", "0.4205", "0.3125"],
            correct: 0,
        },
    ],

    // Round 5
    [
        {
            question: "The correlation coefficient between two variables is 0.85. What does this indicate?",
            options: ["Strong positive linear relationship", "Weak positive linear relationship", "No linear relationship", "Strong negative linear relationship"],
            correct: 0,
        },
        {
            question: "The mean of a dataset is 50, and the variance is 25. What is the standard deviation?",
            options: ["5", "10", "25", "50"],
            correct: 0,
        },
        {
            question: "A factory produces 1000 items, and 50 are found to be defective. What is the proportion of defective items?",
            options: ["0.05", "0.05%", "5%", "0.1"],
            correct: 2,
        },
        {
            question: "In a hypothesis test, the test statistic is 2.5, and the critical value is 2.0. What is the conclusion?",
            options: ["Reject the null hypothesis", "Fail to reject the null hypothesis", "Accept the alternative hypothesis", "Fail to accept the null hypothesis"],
            correct: 0,
        },
        {
            question: "A student’s score on a test is at the 85th percentile. What does this mean?",
            options: ["The student scored better than 85% of the others", "The student scored worse than 85% of the others", "The student’s score is average", "The student’s score is at the median"],
            correct: 0,
        },
    ],
  // Round 6
    [
        {
            question: "What is the probability of drawing a red card from a standard deck of 52 playing cards?",
            options: ["0.25", "0.5", "0.75", "0.4"],
            correct: 1,
        },
        {
            question: "The average score on a test is 70 with a standard deviation of 8. What is the z-score for a score of 85?",
            options: ["1.88", "2.5", "1.25", "1.75"],
            correct: 0,
        },
        {
            question: "In a binomial distribution with n = 10 and p = 0.5, what is the probability of exactly 5 successes?",
            options: ["0.2461", "0.5", "0.3828", "0.3"],
            correct: 0,
        },
        {
            question: "A survey shows that 60% of people prefer product A over product B. If 200 people are surveyed, how many people are expected to prefer product A?",
            options: ["120", "140", "100", "80"],
            correct: 0,
        },
        {
            question: "What is the variance of the following dataset: 10, 12, 14, 18, 20?",
            options: ["16", "20", "18", "25"],
            correct: 0,
        },
    ],

    // Round 7
    [
        {
            question: "If a dataset has a mean of 30 and a standard deviation of 6, what is the z-score for a value of 18?",
            options: ["-2", "-3", "-1", "1"],
            correct: 0,
        },
        {
            question: "The correlation coefficient between two variables is -0.65. What does this indicate?",
            options: ["Moderate negative linear relationship", "Strong positive linear relationship", "No linear relationship", "Strong negative linear relationship"],
            correct: 0,
        },
        {
            question: "A box contains 4 red balls, 5 green balls, and 6 blue balls. If one ball is drawn randomly, what is the probability that it is either red or blue?",
            options: ["0.75", "0.5", "0.9", "0.8"],
            correct: 0,
        },
        {
            question: "The mean score of a class is 75 with a standard deviation of 10. What is the probability of a score being above 85 in a normal distribution?",
            options: ["0.1587", "0.0228", "0.5", "0.8413"],
            correct: 0,
        },
        {
            question: "If the p-value in a hypothesis test is 0.03, and the significance level is 0.05, what is the conclusion?",
            options: ["Reject the null hypothesis", "Fail to reject the null hypothesis", "There is insufficient evidence", "Accept the null hypothesis"],
            correct: 0,
        },
    ],

    // Round 8
    [
        {
            question: "In a dataset, the following values are recorded: 6, 7, 8, 9, 10. What is the mode?",
            options: ["No mode", "6", "7", "None of the above"],
            correct: 0,
        },
        {
            question: "The probability of a student passing an exam is 0.8. What is the probability that a student fails?",
            options: ["0.2", "0.8", "1", "0.4"],
            correct: 0,
        },
        {
            question: "What is the standard deviation of the following values: 2, 4, 6, 8, 10?",
            options: ["2.83", "2", "3", "3.16"],
            correct: 0,
        },
        {
            question: "If a dataset has a mean of 50 and a standard deviation of 5, what percentage of values are expected to fall within 2 standard deviations from the mean?",
            options: ["95%", "68%", "99%", "50%"],
            correct: 0,
        },
        {
            question: "In a regression model, the equation of the line is y = 3x + 2. What is the predicted value of y when x = 5?",
            options: ["17", "15", "18", "20"],
            correct: 0,
        },
    ],

    // Round 9
    [
        {
            question: "A factory produces 1,000 items, and 40 are found to be defective. What is the proportion of defective items?",
            options: ["0.04", "0.05", "0.1", "0.3"],
            correct: 0,
        },
        {
            question: "The mean of a dataset is 12 and the standard deviation is 2. What is the z-score for a value of 16?",
            options: ["2", "1.5", "3", "0.5"],
            correct: 0,
        },
        {
            question: "What is the variance of the following dataset: 9, 12, 15, 18, 21?",
            options: ["18", "20", "22", "16"],
            correct: 0,
        },
        {
            question: "The average test score for a class is 75 with a standard deviation of 12. What is the z-score for a score of 60?",
            options: ["-1.25", "-0.75", "-2", "-1.5"],
            correct: 0,
        },
        {
            question: "A dataset follows a normal distribution with a mean of 40 and a standard deviation of 8. What is the probability of a value being less than 32?",
            options: ["0.1587", "0.5", "0.3413", "0.0228"],
            correct: 0,
        },
    ],

    // Round 10
    [
        {
            question: "In a normal distribution, the mean is 100 and the standard deviation is 15. What is the z-score for a value of 130?",
            options: ["2", "1.5", "3", "2.5"],
            correct: 0,
        },
        {
            question: "The probability of drawing a white ball from a box containing 3 red balls, 5 blue balls, and 2 white balls is:",
            options: ["2/10", "3/10", "1/5", "1/3"],
            correct: 0,
        },
        {
            question: "If a dataset has a mean of 25 and a standard deviation of 5, what is the z-score for a value of 35?",
            options: ["2", "1", "0.5", "3"],
            correct: 0,
        },
        {
            question: "The number of customers arriving at a store follows a Poisson distribution with a mean of 3 per hour. What is the probability of exactly 4 customers arriving in the next hour?",
            options: ["0.168", "0.224", "0.245", "0.270"],
            correct: 0,
        },
        {
            question: "What is the standard deviation of the following dataset: 14, 18, 22, 26, 30?",
            options: ["5.48", "5", "6", "4.5"],
            correct: 0,
        },
    ],
  // Round 11
    [
        {
            question: "What is the probability of drawing a red card from a deck of 52 playing cards, given that there are 26 red cards?",
            options: ["0.5", "0.25", "0.75", "0.4"],
            correct: 0,
        },
        {
            question: "A study shows that 40% of people in a town prefer chocolate ice cream. If a group of 20 people is surveyed, what is the probability that exactly 8 people prefer chocolate ice cream?",
            options: ["0.2", "0.5", "0.25", "0.3"],
            correct: 0,
        },
        {
            question: "In a set of 1000 students, 500 are male and 500 are female. If one student is selected at random, what is the probability that the student is male or female?",
            options: ["1", "0.5", "0.75", "0.25"],
            correct: 0,
        },
        {
            question: "What is the interquartile range (IQR) of the dataset: 4, 8, 12, 16, 20, 24, 28?",
            options: ["12", "8", "10", "6"],
            correct: 0,
        },
        {
            question: "The mean of a dataset is 75 and the standard deviation is 10. What percentage of the data lies within one standard deviation from the mean in a normal distribution?",
            options: ["68%", "95%", "99%", "50%"],
            correct: 0,
        },
    ],

    // Round 12
    [
        {
            question: "What is the variance of the dataset: 10, 12, 14, 16, 18?",
            options: ["16", "20", "25", "18"],
            correct: 0,
        },
        {
            question: "The probability of an event occurring is 0.6. What is the probability of the event not occurring?",
            options: ["0.6", "0.4", "1", "0.2"],
            correct: 1,
        },
        {
            question: "A dataset follows a Poisson distribution with a mean of 4. What is the probability of observing exactly 2 events?",
            options: ["0.195", "0.268", "0.238", "0.180"],
            correct: 0,
        },
        {
            question: "What is the z-score for a value of 150, given that the mean is 120 and the standard deviation is 15?",
            options: ["2", "1.5", "2.5", "1"],
            correct: 0,
        },
        {
            question: "What is the 95% confidence interval for a sample mean of 100, sample standard deviation of 20, and sample size of 50?",
            options: ["95 to 105", "90 to 110", "85 to 115", "93 to 107"],
            correct: 3,
        },
    ],

    // Round 13
    [
        {
            question: "The probability that a student passes a test is 0.8. If 10 students take the test, what is the probability that exactly 8 students pass?",
            options: ["0.301", "0.40", "0.25", "0.35"],
            correct: 0,
        },
        {
            question: "A dataset has a mean of 50 and a variance of 25. What is the standard deviation?",
            options: ["5", "4", "6", "7"],
            correct: 0,
        },
        {
            question: "The number of goals scored by a soccer team in a match follows a Poisson distribution with a mean of 2. What is the probability that the team scores exactly 3 goals?",
            options: ["0.180", "0.150", "0.210", "0.250"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing two red cards consecutively without replacement from a deck of 52 cards, where there are 26 red cards?",
            options: ["0.25", "0.2", "0.15", "0.5"],
            correct: 1,
        },
        {
            question: "A dataset has the following values: 1, 2, 3, 4, 5, 6, 7, 8. What is the median of the dataset?",
            options: ["4.5", "5", "6", "7"],
            correct: 0,
        },
    ],

    // Round 14
    [
        {
            question: "The correlation between two variables is -0.5. What does this indicate?",
            options: ["Moderate negative relationship", "Moderate positive relationship", "Strong positive relationship", "No relationship"],
            correct: 0,
        },
        {
            question: "What is the standard deviation of the following data: 10, 12, 14, 16, 18?",
            options: ["2.83", "3", "4", "3.16"],
            correct: 0,
        },
        {
            question: "A study finds that 30% of people prefer vanilla ice cream. If a group of 100 people is surveyed, how many are expected to prefer vanilla?",
            options: ["30", "50", "70", "100"],
            correct: 0,
        },
        {
            question: "In a normal distribution, 95% of the data falls within how many standard deviations of the mean?",
            options: ["1", "2", "3", "0.5"],
            correct: 1,
        },
        {
            question: "If a population follows a normal distribution with a mean of 45 and a standard deviation of 5, what is the probability of a value being greater than 50?",
            options: ["0.1587", "0.8413", "0.5", "0.0228"],
            correct: 0,
        },
    ],

    // Round 15
    [
        {
            question: "A factory produces 10,000 items, and 500 are found to be defective. What is the proportion of defective items?",
            options: ["0.05", "0.1", "0.04", "0.02"],
            correct: 0,
        },
        {
            question: "In a survey, 60% of respondents prefer coffee over tea. If 200 people are surveyed, how many are expected to prefer coffee?",
            options: ["120", "100", "150", "80"],
            correct: 0,
        },
        {
            question: "A dataset follows a normal distribution with a mean of 30 and a standard deviation of 5. What is the z-score for a value of 40?",
            options: ["2", "1.5", "3", "4"],
            correct: 0,
        },
        {
            question: "The p-value in a hypothesis test is 0.03. If the significance level is 0.05, what is the decision?",
            options: ["Reject the null hypothesis", "Fail to reject the null hypothesis", "There is insufficient evidence", "Accept the null hypothesis"],
            correct: 0,
        },
        {
            question: "What is the coefficient of variation for a dataset with a mean of 50 and a standard deviation of 5?",
            options: ["10%", "12%", "8%", "20%"],
            correct: 0,
        },
    ],
  // Round 16
    [
        {
            question: "In a dataset, the following values are given: 8, 10, 12, 14, 16. What is the range of the dataset?",
            options: ["8", "10", "6", "4"],
            correct: 0,
        },
        {
            question: "The mean of a dataset is 100, and the variance is 25. What is the standard deviation?",
            options: ["5", "4", "6", "7"],
            correct: 0,
        },
        {
            question: "In a normal distribution, what percentage of data is expected to fall within 1 standard deviation of the mean?",
            options: ["68%", "95%", "99%", "75%"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a queen from a standard deck of 52 cards?",
            options: ["1/52", "1/13", "1/26", "1/4"],
            correct: 0,
        },
        {
            question: "In a survey, 40% of respondents prefer product A. If 50 people are surveyed, how many are expected to prefer product A?",
            options: ["20", "30", "40", "50"],
            correct: 0,
        },
    ],

    // Round 17
    [
        {
            question: "A dataset has a mean of 10 and a standard deviation of 2. What is the z-score for a value of 15?",
            options: ["2.5", "2", "1.5", "3"],
            correct: 0,
        },
        {
            question: "What is the mode of the dataset: 3, 5, 7, 5, 5, 8?",
            options: ["5", "3", "7", "8"],
            correct: 0,
        },
        {
            question: "The probability of an event occurring is 0.7. What is the probability of the event not occurring?",
            options: ["0.3", "0.7", "0.5", "0.2"],
            correct: 0,
        },
        {
            question: "If a dataset has a mean of 15 and a standard deviation of 4, what is the z-score for a value of 19?",
            options: ["1", "0.5", "1.25", "1.5"],
            correct: 0,
        },
        {
            question: "What is the 95% confidence interval for a sample mean of 20, sample standard deviation of 5, and sample size of 100?",
            options: ["19.04 to 20.96", "20.25 to 21.75", "18.5 to 21.5", "19.5 to 20.5"],
            correct: 0,
        },
    ],

    // Round 18
    [
        {
            question: "In a survey of 200 people, 120 prefer tea over coffee. What is the probability of selecting a person who prefers tea?",
            options: ["0.6", "0.4", "0.5", "0.3"],
            correct: 0,
        },
        {
            question: "A factory produces 10,000 items, and 2% are defective. How many defective items are there?",
            options: ["200", "300", "100", "150"],
            correct: 0,
        },
        {
            question: "In a normal distribution, the mean is 50 and the standard deviation is 10. What is the probability that a value is between 40 and 60?",
            options: ["0.68", "0.95", "0.99", "0.84"],
            correct: 0,
        },
        {
            question: "If the correlation between two variables is 0.9, what does this indicate?",
            options: ["Strong positive relationship", "Moderate positive relationship", "Weak negative relationship", "No relationship"],
            correct: 0,
        },
        {
            question: "The number of goals scored by a soccer team follows a Poisson distribution with a mean of 3. What is the probability of exactly 4 goals being scored?",
            options: ["0.224", "0.120", "0.150", "0.180"],
            correct: 0,
        },
    ],

    // Round 19
    [
        {
            question: "In a dataset, the values are 10, 20, 30, 40, 50. What is the median of the dataset?",
            options: ["30", "25", "20", "40"],
            correct: 0,
        },
        {
            question: "The probability of drawing a blue ball from a box with 3 blue balls, 5 red balls, and 2 green balls is:",
            options: ["3/10", "1/3", "1/5", "2/5"],
            correct: 0,
        },
        {
            question: "What is the variance of the dataset: 8, 10, 12, 14, 16?",
            options: ["6.25", "7.2", "8", "5"],
            correct: 0,
        },
        {
            question: "In a hypothesis test, the p-value is 0.04. If the significance level is 0.05, what is the decision?",
            options: ["Reject the null hypothesis", "Fail to reject the null hypothesis", "Accept the null hypothesis", "There is insufficient evidence"],
            correct: 0,
        },
        {
            question: "The mean of a dataset is 50, and the standard deviation is 10. What is the z-score for a value of 60?",
            options: ["1", "0.5", "1.5", "2"],
            correct: 0,
        },
    ],

    // Round 20
    [
        {
            question: "In a set of data, the following values are given: 2, 4, 6, 8, 10. What is the range of the data?",
            options: ["8", "10", "6", "4"],
            correct: 0,
        },
        {
            question: "What is the coefficient of variation for a dataset with a mean of 20 and a standard deviation of 4?",
            options: ["20%", "40%", "25%", "15%"],
            correct: 0,
        },
        {
            question: "What is the standard deviation for a dataset with values: 5, 6, 7, 8, 9?",
            options: ["1.58", "2", "2.5", "3"],
            correct: 0,
        },
        {
            question: "The probability of a student passing an exam is 0.85. What is the probability of the student failing the exam?",
            options: ["0.15", "0.85", "0.5", "0.2"],
            correct: 0,
        },
        {
            question: "In a normal distribution, the mean is 100 and the standard deviation is 15. What is the probability that a value is between 85 and 115?",
            options: ["0.6827", "0.8413", "0.5", "0.95"],
            correct: 0,
        },
    ],
  // Round 21
    [
        {
            question: "What is the mean of the following dataset: 5, 7, 9, 11, 13?",
            options: ["9", "8", "10", "7"],
            correct: 0,
        },
        {
            question: "In a dataset with a mean of 20 and a standard deviation of 5, what is the z-score for a value of 25?",
            options: ["1", "0.5", "1.5", "0.25"],
            correct: 0,
        },
        {
            question: "If a dataset follows a normal distribution with a mean of 60 and a standard deviation of 8, what is the probability of a value being greater than 70?",
            options: ["0.1587", "0.8413", "0.5", "0.0228"],
            correct: 0,
        },
        {
            question: "The probability of getting heads in a fair coin toss is 0.5. What is the probability of getting heads twice in two tosses?",
            options: ["0.25", "0.5", "0.75", "1"],
            correct: 0,
        },
        {
            question: "The range of a dataset is 15. If the smallest value is 10, what is the largest value?",
            options: ["25", "20", "15", "30"],
            correct: 0,
        },
    ],

    // Round 22
    [
        {
            question: "What is the standard deviation of the dataset: 2, 4, 6, 8, 10?",
            options: ["2.83", "3", "4", "1.58"],
            correct: 0,
        },
        {
            question: "The mean of a dataset is 50 and the variance is 25. What is the standard deviation?",
            options: ["5", "6", "10", "8"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a red or a blue ball from a box containing 5 red balls, 7 blue balls, and 3 green balls?",
            options: ["0.6", "0.75", "0.8", "0.5"],
            correct: 0,
        },
        {
            question: "In a normal distribution, what percentage of the data lies between the mean and one standard deviation above the mean?",
            options: ["34%", "50%", "68%", "95%"],
            correct: 0,
        },
        {
            question: "If a box contains 6 red balls and 4 green balls, what is the probability of drawing a green ball?",
            options: ["0.4", "0.6", "0.5", "0.8"],
            correct: 0,
        },
    ],

    // Round 23
    [
        {
            question: "The probability of an event occurring is 0.7. What is the probability of the event not occurring?",
            options: ["0.3", "0.7", "1", "0.5"],
            correct: 0,
        },
        {
            question: "In a dataset, the mean is 15, and the variance is 25. What is the standard deviation?",
            options: ["5", "6", "7", "8"],
            correct: 0,
        },
        {
            question: "What is the mode of the following dataset: 3, 5, 7, 7, 8, 9?",
            options: ["7", "5", "9", "3"],
            correct: 0,
        },
        {
            question: "What is the 75th percentile of the dataset: 2, 5, 8, 12, 15?",
            options: ["12", "8", "15", "5"],
            correct: 0,
        },
        {
            question: "In a dataset of 1000 students, 600 are male and 400 are female. What is the probability of selecting a female student?",
            options: ["0.4", "0.6", "0.5", "0.3"],
            correct: 0,
        },
    ],

    // Round 24
    [
        {
            question: "In a survey, 60% of respondents prefer product A. If 200 people are surveyed, how many are expected to prefer product A?",
            options: ["120", "150", "100", "50"],
            correct: 0,
        },
        {
            question: "The variance of a dataset is 36. What is the standard deviation?",
            options: ["6", "5", "7", "8"],
            correct: 0,
        },
        {
            question: "In a normal distribution, what percentage of the data falls within 2 standard deviations of the mean?",
            options: ["95%", "68%", "50%", "99%"],
            correct: 0,
        },
        {
            question: "The number of goals scored by a soccer team follows a Poisson distribution with a mean of 3. What is the probability of exactly 2 goals being scored?",
            options: ["0.224", "0.150", "0.200", "0.180"],
            correct: 0,
        },
        {
            question: "What is the z-score for a value of 75, given that the mean is 70 and the standard deviation is 5?",
            options: ["1", "0.5", "1.5", "2"],
            correct: 0,
        },
    ],

    // Round 25
    [
        {
            question: "What is the coefficient of variation for a dataset with a mean of 30 and a standard deviation of 5?",
            options: ["16.7%", "15%", "18%", "10%"],
            correct: 0,
        },
        {
            question: "A dataset has the following values: 3, 6, 7, 8, 10. What is the range of the dataset?",
            options: ["7", "6", "5", "8"],
            correct: 0,
        },
        {
            question: "The correlation coefficient between two variables is -0.8. What does this indicate?",
            options: ["Strong negative relationship", "No relationship", "Strong positive relationship", "Weak negative relationship"],
            correct: 0,
        },
        {
            question: "In a set of data, the mean is 20, and the variance is 16. What is the standard deviation?",
            options: ["4", "5", "6", "7"],
            correct: 0,
        },
        {
            question: "The probability of drawing a red card from a deck of 52 playing cards is:",
            options: ["1/2", "1/4", "1/13", "1/26"],
            correct: 0,
        },
    ],
   // Round 26
    [
        {
            question: "What is the mean of the dataset: 7, 9, 11, 13, 15?",
            options: ["11", "10", "12", "13"],
            correct: 0,
        },
        {
            question: "The variance of a dataset is 81. What is the standard deviation?",
            options: ["9", "8", "7", "6"],
            correct: 0,
        },
        {
            question: "The mean of a dataset is 25, and the standard deviation is 5. What is the z-score for a value of 35?",
            options: ["2", "1", "1.5", "3"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a red or a black card from a deck of 52 cards?",
            options: ["1", "0.5", "0.25", "0.75"],
            correct: 0,
        },
        {
            question: "If the probability of an event is 0.8, what is the probability of the event not occurring?",
            options: ["0.2", "0.3", "0.5", "0.6"],
            correct: 0,
        },
    ],

    // Round 27
    [
        {
            question: "What is the median of the dataset: 3, 5, 7, 8, 12?",
            options: ["7", "5", "8", "6"],
            correct: 0,
        },
        {
            question: "In a normal distribution, 95% of data falls within how many standard deviations of the mean?",
            options: ["2", "1", "3", "4"],
            correct: 0,
        },
        {
            question: "The number of defective products in a batch follows a Poisson distribution with a mean of 4. What is the probability of exactly 5 defects?",
            options: ["0.175", "0.200", "0.125", "0.220"],
            correct: 0,
        },
        {
            question: "The correlation between two variables is 0.75. What does this indicate?",
            options: ["Strong positive relationship", "Weak positive relationship", "Strong negative relationship", "No relationship"],
            correct: 0,
        },
        {
            question: "The mean of a dataset is 40, and the standard deviation is 8. What is the z-score for a value of 48?",
            options: ["1", "0.5", "2", "1.5"],
            correct: 0,
        },
    ],

    // Round 28
    [
        {
            question: "If a dataset has values 10, 12, 14, 16, and 18, what is the range?",
            options: ["8", "6", "10", "12"],
            correct: 0,
        },
        {
            question: "The probability of an event occurring is 0.6. What is the probability of it not occurring?",
            options: ["0.4", "0.6", "0.5", "0.7"],
            correct: 0,
        },
        {
            question: "What is the 25th percentile of the dataset: 1, 3, 5, 7, 9?",
            options: ["3", "5", "2", "1"],
            correct: 0,
        },
        {
            question: "The mean of a dataset is 50, and the standard deviation is 10. What is the z-score for a value of 40?",
            options: ["-1", "-0.5", "0", "1"],
            correct: 0,
        },
        {
            question: "In a dataset of 150 students, 120 are male and 30 are female. What is the probability of selecting a male student?",
            options: ["0.8", "0.3", "0.2", "0.5"],
            correct: 0,
        },
    ],

    // Round 29
    [
        {
            question: "What is the mode of the following dataset: 3, 6, 7, 7, 10, 7?",
            options: ["7", "6", "3", "10"],
            correct: 0,
        },
        {
            question: "In a normal distribution, what percentage of the data falls between 1 and 2 standard deviations above the mean?",
            options: ["13.6%", "34%", "68%", "95%"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a queen or a king from a standard deck of 52 cards?",
            options: ["2/13", "1/26", "1/13", "1/52"],
            correct: 0,
        },
        {
            question: "The probability of a student passing an exam is 0.85. What is the probability of the student failing?",
            options: ["0.15", "0.5", "0.25", "0.1"],
            correct: 0,
        },
        {
            question: "A factory produces 500 items, and 4% are defective. How many defective items are there?",
            options: ["20", "18", "22", "25"],
            correct: 0,
        },
    ],

    // Round 30
    [
        {
            question: "What is the standard deviation of the dataset: 5, 10, 15, 20, 25?",
            options: ["7.5", "8", "5", "6"],
            correct: 0,
        },
        {
            question: "In a normal distribution, 68% of the data lies within how many standard deviations of the mean?",
            options: ["1", "2", "0.5", "3"],
            correct: 0,
        },
        {
            question: "What is the 50th percentile of the dataset: 1, 3, 5, 7, 9?",
            options: ["5", "7", "3", "6"],
            correct: 0,
        },
        {
            question: "The probability of drawing a red ball from a box of 5 red balls, 3 blue balls, and 2 green balls is:",
            options: ["5/10", "3/10", "2/10", "1/10"],
            correct: 0,
        },
        {
            question: "What is the mean of the following dataset: 3, 6, 9, 12, 15?",
            options: ["9", "10", "11", "12"],
            correct: 0,
        },
    ],
  // Round 31
    [
        {
            question: "What is the mode of the dataset: 5, 6, 7, 7, 8, 8, 8?",
            options: ["8", "7", "6", "5"],
            correct: 0,
        },
        {
            question: "If the mean of a dataset is 35 and the variance is 16, what is the standard deviation?",
            options: ["4", "5", "6", "7"],
            correct: 0,
        },
        {
            question: "The probability of an event occurring is 0.3. What is the probability of the event not occurring?",
            options: ["0.7", "0.6", "0.5", "0.3"],
            correct: 0,
        },
        {
            question: "In a normal distribution, approximately what percentage of the data lies within one standard deviation of the mean?",
            options: ["68%", "95%", "99%", "75%"],
            correct: 0,
        },
        {
            question: "What is the variance of the dataset: 3, 6, 9, 12, 15?",
            options: ["18", "10", "16", "14"],
            correct: 0,
        },
    ],

    // Round 32
    [
        {
            question: "What is the 75th percentile of the dataset: 2, 5, 8, 12, 14?",
            options: ["12", "8", "14", "5"],
            correct: 0,
        },
        {
            question: "The correlation coefficient between two variables is 0.9. What does this indicate?",
            options: ["Strong positive relationship", "Strong negative relationship", "No relationship", "Weak positive relationship"],
            correct: 0,
        },
        {
            question: "In a dataset, the mean is 25, and the standard deviation is 3. What is the z-score for a value of 29?",
            options: ["1.33", "2", "1", "0.5"],
            correct: 0,
        },
        {
            question: "What is the median of the dataset: 6, 12, 18, 24, 30?",
            options: ["18", "12", "24", "30"],
            correct: 0,
        },
        {
            question: "If the probability of an event is 0.75, what is the odds in favor of the event?",
            options: ["3:1", "1:1", "1:3", "4:1"],
            correct: 0,
        },
    ],

    // Round 33
    [
        {
            question: "The number of defective items in a batch follows a Poisson distribution with a mean of 6. What is the probability of finding 3 defective items?",
            options: ["0.0892", "0.1235", "0.0653", "0.1789"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a red or black card from a deck of 52 playing cards?",
            options: ["1", "0.5", "0.25", "0.75"],
            correct: 0,
        },
        {
            question: "What is the 25th percentile of the dataset: 5, 8, 12, 15, 20?",
            options: ["8", "12", "5", "10"],
            correct: 0,
        },
        {
            question: "In a dataset with a mean of 50 and a standard deviation of 7, what is the z-score for a value of 45?",
            options: ["-0.71", "0.5", "0", "-1.5"],
            correct: 0,
        },
        {
            question: "If the probability of a student passing an exam is 0.8, what is the probability of the student failing?",
            options: ["0.2", "0.3", "0.5", "0.8"],
            correct: 0,
        },
    ],

    // Round 34
    [
        {
            question: "What is the range of the dataset: 10, 15, 20, 25, 30?",
            options: ["20", "25", "10", "15"],
            correct: 0,
        },
        {
            question: "What is the variance of the dataset: 4, 6, 8, 10, 12?",
            options: ["8", "10", "6", "16"],
            correct: 0,
        },
        {
            question: "What is the probability of rolling a 3 or 4 on a fair six-sided die?",
            options: ["1/3", "1/6", "1/2", "1/4"],
            correct: 0,
        },
        {
            question: "The mean of a dataset is 60, and the standard deviation is 12. What is the z-score for a value of 72?",
            options: ["1", "0.5", "2", "0.2"],
            correct: 0,
        },
        {
            question: "In a standard deck of cards, what is the probability of drawing a red card or a jack?",
            options: ["1/2", "7/26", "1/4", "1/13"],
            correct: 0,
        },
    ],

    // Round 35
    [
        {
            question: "If a dataset has a mean of 20 and a standard deviation of 4, what is the z-score for a value of 16?",
            options: ["-1", "-0.5", "0", "1"],
            correct: 0,
        },
        {
            question: "In a survey of 1000 people, 500 preferred product A, 300 preferred product B, and 200 preferred product C. What is the probability of selecting someone who preferred product A?",
            options: ["0.5", "0.3", "0.4", "0.2"],
            correct: 0,
        },
        {
            question: "The probability of a successful event is 0.9. What is the odds against the event occurring?",
            options: ["1:9", "9:1", "1:10", "10:1"],
            correct: 0,
        },
        {
            question: "What is the standard deviation of the dataset: 2, 4, 6, 8, 10?",
            options: ["2.83", "3", "2.5", "1.5"],
            correct: 0,
        },
        {
            question: "The number of defective items in a batch follows a Poisson distribution with a mean of 2. What is the probability of finding 1 defective item?",
            options: ["0.2707", "0.4405", "0.3235", "0.2113"],
            correct: 0,
        },
    ],
  // Round 36
    [
        {
            question: "What is the 90th percentile of the dataset: 10, 20, 30, 40, 50?",
            options: ["45", "50", "40", "35"],
            correct: 0,
        },
        {
            question: "The correlation coefficient between two variables is -0.85. What does this indicate?",
            options: ["Strong negative relationship", "Weak negative relationship", "No relationship", "Strong positive relationship"],
            correct: 0,
        },
        {
            question: "In a dataset, the mean is 55 and the variance is 25. What is the standard deviation?",
            options: ["5", "6", "7", "10"],
            correct: 0,
        },
        {
            question: "What is the probability of selecting a queen or a king from a standard deck of 52 cards?",
            options: ["2/13", "1/26", "1/52", "1/13"],
            correct: 0,
        },
        {
            question: "What is the mean of the dataset: 8, 12, 18, 22, 30?",
            options: ["18", "16", "14", "15"],
            correct: 0,
        },
    ],

    // Round 37
    [
        {
            question: "What is the range of the dataset: 5, 15, 20, 25, 35?",
            options: ["30", "20", "25", "10"],
            correct: 0,
        },
        {
            question: "The number of defective items in a batch follows a Poisson distribution with a mean of 3. What is the probability of finding 2 defective items?",
            options: ["0.2241", "0.3012", "0.1537", "0.2389"],
            correct: 0,
        },
        {
            question: "What is the median of the dataset: 4, 6, 10, 12, 14?",
            options: ["10", "12", "6", "14"],
            correct: 0,
        },
        {
            question: "In a normal distribution, approximately what percentage of data lies between 2 and 3 standard deviations above the mean?",
            options: ["2.1%", "99.7%", "13.6%", "68%"],
            correct: 0,
        },
        {
            question: "What is the variance of the dataset: 1, 3, 5, 7, 9?",
            options: ["6.25", "8", "10", "9"],
            correct: 0,
        },
    ],

    // Round 38
    [
        {
            question: "The probability of an event occurring is 0.25. What is the odds in favor of the event?",
            options: ["1:3", "3:1", "1:4", "4:1"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a red card from a standard deck of 52 cards?",
            options: ["1/2", "1/4", "1/13", "1/52"],
            correct: 0,
        },
        {
            question: "If a dataset has the following values: 8, 10, 12, 14, and 16, what is the standard deviation?",
            options: ["2.83", "2", "3", "2.5"],
            correct: 0,
        },
        {
            question: "What is the mode of the dataset: 3, 7, 7, 10, 15?",
            options: ["7", "3", "10", "15"],
            correct: 0,
        },
        {
            question: "If the mean of a dataset is 50 and the standard deviation is 5, what is the z-score for a value of 45?",
            options: ["-1", "-0.5", "0", "1"],
            correct: 0,
        },
    ],

    // Round 39
    [
        {
            question: "What is the 50th percentile of the dataset: 1, 2, 3, 4, 5?",
            options: ["3", "2", "4", "5"],
            correct: 0,
        },
        {
            question: "In a normal distribution, approximately what percentage of the data lies between 1 and 2 standard deviations below the mean?",
            options: ["13.6%", "68%", "95%", "99%"],
            correct: 0,
        },
        {
            question: "If the mean of a dataset is 40 and the standard deviation is 8, what is the z-score for a value of 48?",
            options: ["1", "0.5", "2", "1.5"],
            correct: 0,
        },
        {
            question: "What is the probability of rolling a sum of 7 with two six-sided dice?",
            options: ["1/6", "1/12", "1/36", "1/9"],
            correct: 0,
        },
        {
            question: "What is the variance of the dataset: 10, 15, 20, 25, 30?",
            options: ["25", "50", "35", "30"],
            correct: 0,
        },
    ],

    // Round 40
    [
        {
            question: "What is the probability of drawing a red card or a 2 from a standard deck of 52 cards?",
            options: ["1/2", "7/26", "1/13", "1/4"],
            correct: 0,
        },
        {
            question: "What is the mean of the following dataset: 5, 10, 15, 20, 25?",
            options: ["15", "10", "12", "14"],
            correct: 0,
        },
        {
            question: "If the probability of an event occurring is 0.6, what is the odds against the event?",
            options: ["2:3", "3:2", "1:3", "1:2"],
            correct: 0,
        },
        {
            question: "What is the standard deviation of the dataset: 5, 10, 15, 20, 25?",
            options: ["7.5", "8", "6", "10"],
            correct: 0,
        },
        {
            question: "If a dataset follows a normal distribution with a mean of 50 and a standard deviation of 10, what is the probability of selecting a value greater than 60?",
            options: ["0.1587", "0.8413", "0.5", "0.5"],
            correct: 0,
        },
    ]
  ];



// Game State
let currentRound = 0;
let currentQuestion = 0;
let timer;
let timeLeft;
let isQuizActive = false;
let timeScore = 0;
let roundScore = 0;

// DOM Elements
const timerBar = document.querySelector('.timer-bar');
const timerDisplay = document.querySelector('.timer-display');
const questionElement = document.querySelector('.question');
const optionsContainer = document.querySelector('.options');
const startButton = document.querySelector('.start-quiz');
const nextRoundButton = document.querySelector('.next-round');
const progressDots = document.querySelectorAll('.progress-dot');
const roundDisplay = document.querySelector('#currentRound');
const timeScoreDisplay = document.querySelector('#timeScore');
const roundScoreDisplay = document.querySelector('#roundScore');
const feedbackElement = document.querySelector('.feedback');
const finalScoresElement = document.querySelector('.final-scores');

// Timer Function
function startTimer() {
    timeLeft = 60;
    timerBar.style.width = '100%';
    
    timer = setInterval(() => {
        timeLeft -= 0.1;
        timerDisplay.textContent = Math.ceil(timeLeft);
        timerBar.style.width = `${(timeLeft / 60) * 100}%`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            showFeedback(false);
            setTimeout(() => nextQuestion(), 1000);
        }
    }, 100);
}

// Display Question Function
function displayQuestion() {
    const currentQuestionData = questions[currentRound][currentQuestion];
    questionElement.textContent = currentQuestionData.question;
    feedbackElement.classList.remove('show', 'correct', 'wrong');
    finalScoresElement.innerHTML = '';
    
    optionsContainer.innerHTML = '';
    currentQuestionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option fade-in';
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });

    updateProgressDots();
}

// Check Answer Function
function checkAnswer(selectedIndex) {
    clearInterval(timer);
    const currentQuestionData = questions[currentRound][currentQuestion];
    const isCorrect = selectedIndex === currentQuestionData.correct;
    
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.style.pointerEvents = 'none');
    
    options[selectedIndex].classList.add(isCorrect ? 'correct' : 'wrong');
    options[currentQuestionData.correct].classList.add('correct');

    if (isCorrect) {
        roundScore++;
        timeScore += Math.ceil(timeLeft);
        roundScoreDisplay.textContent = roundScore;
        timeScoreDisplay.textContent = timeScore;
    }

    showFeedback(isCorrect);
    progressDots[currentQuestion].classList.add(isCorrect ? 'correct' : 'wrong');

    setTimeout(() => nextQuestion(), 1000);
}

// Show Feedback Function
function showFeedback(isCorrect) {
    feedbackElement.textContent = isCorrect ? 'Correct! 🎉' : 'Wrong! 😞';
    feedbackElement.className = `feedback show ${isCorrect ? 'correct' : 'wrong'}`;
}

// Next Question Function
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion >= questions[currentRound].length) {
        endRound();
    } else {
        displayQuestion();
        startTimer();
    }
}

// Update Progress Dots Function
function updateProgressDots() {
    progressDots.forEach((dot, index) => {
        if (index === currentQuestion) {
            dot.classList.add('active');
        } else if (index < currentQuestion) {
            dot.classList.remove('active');
        }
    });
}

// End Round Function
function endRound() {
    isQuizActive = false;
    timerDisplay.textContent = '60';
    timerBar.style.width = '100%';
    questionElement.textContent = 'Round Complete! 🎯';
    optionsContainer.innerHTML = '';
    feedbackElement.classList.remove('show');
    
    finalScoresElement.innerHTML = `
        <div>Round Score: ${roundScore}/5 correct answers</div>
        <div>Time Bonus Points: ${timeScore}</div>
        <div>Great job! 🎉</div>
    `;
    
    nextRoundButton.style.display = 'block';
    startButton.style.display = 'none';
}

// Start New Round Function
function startNewRound() {
    currentQuestion = 0;
    currentRound++;
    roundScore = 0;
    roundDisplay.textContent = currentRound + 1;
    roundScoreDisplay.textContent = '0';
    nextRoundButton.style.display = 'none';
    startButton.style.display = 'block';
    questionElement.textContent = `Ready for Round ${currentRound + 1}? 🤩`;
    optionsContainer.innerHTML = '';
    feedbackElement.classList.remove('show');
    finalScoresElement.innerHTML = '';
    
    // Reset progress dots
    progressDots.forEach(dot => {
        dot.className = 'progress-dot';
    });
    progressDots[0].classList.add('active');
}

// Event Listeners
startButton.addEventListener('click', () => {
    if (!isQuizActive) {
        isQuizActive = true;
        startButton.style.display = 'none';
        displayQuestion();
        startTimer();
    }
});

nextRoundButton.addEventListener('click', () => {
    if (currentRound < questions.length - 1) {
        startNewRound();
    } else {
        // End of all rounds
        questionElement.textContent = 'Quiz Complete! 🎉';
        finalScoresElement.innerHTML = `
            <div>Final Score: ${timeScore} points</div>
            <div>Thank you for playing! 🌟</div>
        `;
        nextRoundButton.style.display = 'none';
    }
});

// Initialize first round
questionElement.textContent = 'Ready for Round 1? 🏁';
