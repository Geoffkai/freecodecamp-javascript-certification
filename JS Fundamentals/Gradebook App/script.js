function getAverage(arrayOfTestScore){
    let average = 0;
    for(const score of arrayOfTestScore){
        average += score;
    }
    return average/arrayOfTestScore.length;
}

function getGrade(score){
    if(score == 100){
        return "A+";
    }else if(99 >= score && score >= 90){
        return "A";
    }else if(89 >= score && score >= 80){
        return "B";
    }else if(79 >= score && score >= 70){
        return "C";
    }else if(69 >= score && score >= 60){
        return "D";
    }else if(59 >= score || score >= 0){
        return "F";
    }
}

function hasPassingGrade(score){
    return !(getGrade(score) == "F");
}

function studentMsg(arrayOfScore, score){
    if(hasPassingGrade(score)){
        return `Class average: ${getAverage(arrayOfScore)}. Your grade: ${getGrade(score)}. You passed the course.`;
    }else{
        return `Class average: ${getAverage(arrayOfScore)}. Your grade: ${getGrade(score)}. You failed the course.`;
    }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));