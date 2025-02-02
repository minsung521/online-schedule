const links = {
  "국어(허)": "5377141697&pwd=dimigo",
  "수학(류)": "6838770867&pwd=dimigo",
  "수학(김)": "https://teams.microsoft.com/l/team/19%3a3bc99faef2654410ba199d1d143b200c%40thread.tacv2/conversations?groupId=5eb418d5-652a-473d-b11d-6981e06a2203&tenantId=b6d94080-6cb3-403b-8a0f-5c44c2448089",
  "영어(양)": "7654919677&pwd=dimigo",
  "진로(공)": "4700404365&pwd=dimigo",
  "사회(이)": "https://bit.ly/34rBBfM",
  "한국사(박)": "3955689232&pwd=dimigo",
  "과학(전)": "2693268647&pwd=dimigo",
  "체육(김)": "7760965125&pwd=dimigo",
  "진로(상)": "3490119479&pwd=dimigo",
  "미술(전)": "5135798594&pwd=dimigo",
  "음악(이)": "https://bit.ly/34rBBfM",
  "진로(택)": "https://bit.ly/34rBBfM",
  "상경(김)": "8402132429&pwd=dimigo",
  "플밍(김)": "6471668401&pwd=dimigo",
  "IOT(하)": "3053522072&pwd=dimigo",
  "컴그(하)": "85619794873&pwd=dimigo",
  "컴일(조)": "3650046422&pwd=dimigo",
  "진로(전)": "7385237525&pwd=dimigo",
  "진로(호)": "5363759347&pwd=dimigo",
  "진로(신)": "TODO"
};

const schedule = {
  "1-1": {
    "Mon": ['영어(양)', '컴그(하)', '컴그(하)', '한국사(박)', '과학(전)', '음악(이)', 'HR'],
    "Tue": ['국어(허)', '한국사(박)', '사회(이)', '진로(전)', '수학(류)', '영어(양)', '음악(이)'],
    "Wed": ['사회(이)', '체육(김)', '과학(전)', '진로(전)', '상경(김)', 'CA', ''],
    "Thu": ['한국사(박)', '국어(허)', '상경(김)', '영어(양)', '수학(류)', '사회(이)', '과학(전)'],
    "Fri": ['국어(허)', '컴그(하)', '컴그(하)', '수학(류)', '음악(이)', '상경(김)', '체육(김)'],
    "Sat": ['No Schedule'],
    "Sun": ['No Schedule']
  },
  "1-2": {
    "Mon": ['상경(김)', '과학(전)', '사회(이)', '체육(김)', '한국사(박)', '진로(상)', 'HR'],
    "Tue": ['컴그(하)', '컴그(하)', '미술(전)', '수학(김)', '상경(김)', '과학(전)', '영어(양)'],
    "Wed": ['상경(김)', '컴그(하)', '컴그(하)', '체육(김)', '국어(허)', 'CA', ''],
    "Thu": ['미술(전)', '수학(김)', '사회(이)', '국어(허)', '과학(전)', '영어(양)', '한국사(박)'],
    "Fri": ['사회(이)', '수학(김)', '한국사(박)', '국어(허)', '미술(전)', '영어(양)', '진로(상)'],
    "Sat": ['No Schedule'],
    "Sun": ['No Schedule']
  },
  "1-3": {
    "Mon": ['컴일(조)', '국어(허)', '체육(김)', '음악(이)', '플밍(김)', '플밍(김)', 'HR'],
    "Tue": ['과학(전)', '국어(허)', '수학(류)', '진로(택)', '사회(이)', 'IOT(하)', 'IOT(하)'],
    "Wed": ['음악(이)', '사회(이)', '플밍(김)', '플밍(김)', '영어(양)', 'CA', ''],
    "Thu": ['영어(양)', '수학(류)', '진로(택)', '과학(전)', '체육(김)', '국어(허)', '컴일(조)'],
    "Fri": ['과학(전)', '음악(이)', '영어(양)', '사회(이)', '수학(류)', '컴일(조)', 'IOT(하)'],
    "Sat": ['No Schedule'],
    "Sun": ['No Schedule']
  },
  "1-4": {
    "Mon": ['수학(류)', 'IOT(하)', '과학(전)', '사회(이)', '음악(이)', '영어(양)', 'HR'],
    "Tue": ['플밍(김)', '플밍(김)', '과학(전)', '체육(김)', '국어(허)', '사회(이)', '컴일(조)'],
    "Wed": ['영어(양)', '수학(류)', '국어(허)', '사회(이)', '음악(이)', 'CA', ''],
    "Thu": ['플밍(김)', '플밍(김)', '컴일(조)', '수학(류)', 'IOT(하)', 'IOT(하)', '진로(신)'],
    "Fri": ['음악(이)', '영어(양)', '국어(허)', '컴일(조)', '체육(김)', '과학(전)', '진로(신)'],
    "Sat": ['No Schedule'],
    "Sun": ['No Schedule']
  },
  "1-5": {
    "Mon": ['사회(이)', '플밍(김)', '플밍(김)', '미술(전)', '수학(류)', '국어(허)', 'HR'],
    "Tue": ['IOT(하)', 'IOT(하)', '컴일(조)', '영어(양)', '플밍(김)', '플밍(김)', '체육(김)'],
    "Wed": ['국어(허)', '컴일(조)', '영어(양)', '수학(류)', '과학(전)', 'CA', ''],
    "Thu": ['사회(이)', '과학(전)', '체육(김)', '진로(공)', '미술(전)', '컴일(조)', '국어(허)'],
    "Fri": ['수학(류)', '미술(전)', '과학(전)', 'IOT(하)', '영어(양)', '사회(이)', '진로(공)'],
    "Sat": ['No Schedule'],
    "Sun": ['No Schedule']
  },
  "1-6": {
    "Mon": ['미술(전)', '컴일(조)', '국어(허)', '수학(류)', '영어(양)', '체육(김)', 'HR'],
    "Tue": ['사회(이)', '수학(류)', '영어(양)', '국어(허)', '과학(전)', '미술(전)', '진로(상)'],
    "Wed": ['과학(전)', 'IOT(하)', 'IOT(하)', '진로(상)', '체육(김)', 'CA', ''],
    "Thu": ['수학(류)', '컴일(조)', '영어(양)', '사회(이)', '플밍(김)', '플밍(김)', '미술(전)'],
    "Fri": ['IOT(하)', '사회(이)', '플밍(김)', '플밍(김)', '과학(전)', '국어(허)', '컴일(조)'],
    "Sat": ['No Schedule'],
    "Sun": ['No Schedule']
  },
};

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let className = '';
let todaySchedule = [];
let recentName = '';

document.addEventListener("DOMContentLoaded", () => {
  initialize();
});

const isMobile = () => {
	let UserAgent = navigator.userAgent;
	if(UserAgent.match(/iPhone|iPod|iPad|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null) {
		return true;
	} else {
		return false;
	}
};

const initialize = () => {
  if(localStorage.getItem('class') == null) {
    document.getElementsByTagName('h2')[0].innerHTML = '반을 선택해주세요.';
    return;
  }
  className = localStorage.getItem('class');
  let elements = document.getElementsByTagName('option');
  if(elements[0].value == '선택해주세요') {
    classSelector.remove(0);
  }
  for (let i = 0; i < elements.length; i++) {
    if(className == elements[i].value) {
      classSelector.selectedIndex = i;
    }
  }
  loop();
};

const loop = () => {
  setTimeout(loop, 1000);
  if(className == "1-1") {
    links["CA"] = links["상경(김)"];
    links["HR"] = links["상경(김)"];
  } else if(className == "1-2") {
    links["CA"] = links["영어(양)"];
    links["HR"] = links["영어(양)"];
  } else if(className == "1-3") {
    links["CA"] = links["음악(이)"];
    links["HR"] = links["음악(이)"];
  } else if(className == "1-4") {
    links["CA"] = links["과학(전)"];
    links["HR"] = links["과학(전)"];
  } else if(className == "1-5") {
    links["CA"] = links["국어(허)"];
    links["HR"] = links["국어(허)"];
  } else if(className = "1-6") {
    links["CA"] = links["사회(이)"];
    links["HR"] = links["사회(이)"];
  }
  const d = new Date();
  todaySchedule = schedule[className][days[d.getDay()]];
  if(todaySchedule[0] == 'No Schedule') {
    noSchedule();
    return;
  }
  let elements = document.getElementsByClassName('schedule');
  for (let i = 0; i < 7; i++) {
    elements[i].textContent = todaySchedule[i];
    elements[i].classList.remove('selected');
  }
  let hour = d.getHours();
  let min = d.getMinutes();
  if(hour < 8) {
    document.getElementsByTagName('h2')[0].innerHTML = '아직 리잠 잘 시간이야..';
  } else if(hour <= 8 && min < 45) {
    updateH2('조례', links.HR, true);
    redirect(links.HR, '조례');
  } else if(hour == 8 && min < 58) {
    updateH2('조례', links.HR, false);
    redirect(links.HR, '조례');
  } else if(hour == 8) {
    elements[0].classList.add('selected');
    updateH2(todaySchedule[0], links[todaySchedule[0]], true);
    redirect(links[todaySchedule[0]], todaySchedule[0]);
  } else if(hour <= 9 && min < 50) {
    elements[0].classList.add('selected');
    updateH2(todaySchedule[0], links[todaySchedule[0]], false);
    redirect(links[todaySchedule[0]], todaySchedule[0]);
  } else if(hour == 9) {
    elements[1].classList.add('selected');
    updateH2(todaySchedule[1], links[todaySchedule[1]], true);
    if(min >= 55) {
      redirect(links[todaySchedule[1]], todaySchedule[1]);
    }
  } else if(hour <= 10 && min < 50) {
    elements[1].classList.add('selected');
    updateH2(todaySchedule[1], links[todaySchedule[1]], false);
    redirect(links[todaySchedule[1]], todaySchedule[1]);
  } else if(hour == 10) {
    elements[2].classList.add('selected');
    updateH2(todaySchedule[2], links[todaySchedule[2]], true);
    if(min >= 55) {
      redirect(links[todaySchedule[2]], todaySchedule[2]);
    }
  } else if(hour <= 11 && min < 50) {
    elements[2].classList.add('selected');
    updateH2(todaySchedule[2], links[todaySchedule[2]], false);
    redirect(links[todaySchedule[2]], todaySchedule[2]);
  } else if(hour == 11) {
    elements[3].classList.add('selected');
    updateH2(todaySchedule[3], links[todaySchedule[3]], true);
    if(min >= 55) {
      redirect(links[todaySchedule[3]], todaySchedule[3]);
    }
  } else if(hour <= 12 && min < 50) {
    elements[3].classList.add('selected');
    updateH2(todaySchedule[3], links[todaySchedule[3]], false);
    redirect(links[todaySchedule[3]], todaySchedule[3]);
  } else if(hour == 12 || (hour == 13 && min < 40)) {
    document.getElementsByTagName('h2')[0].innerHTML = '점심시간 !';
  } else if(hour == 13 && min < 50) {
    elements[4].classList.add('selected');
    updateH2(todaySchedule[4], links[todaySchedule[4]], true);
    if(min >= 45) {
      redirect(links[todaySchedule[4]], todaySchedule[4]);
    }
  } else if(hour == 13 || (hour <= 14 && min < 40)) {
    elements[4].classList.add('selected');
    updateH2(todaySchedule[4], links[todaySchedule[4]], false);
    redirect(links[todaySchedule[4]], todaySchedule[4]);
  } else if(hour == 14 && min < 50) {
    elements[5].classList.add('selected');
    updateH2(todaySchedule[5], links[todaySchedule[5]], true);
    if(min >= 45) {
      redirect(links[todaySchedule[5]], todaySchedule[5]);
    }
  } else if(hour == 14 || (hour <= 15 && min < 40)) {
    elements[5].classList.add('selected');
    updateH2(todaySchedule[5], links[todaySchedule[5]], false);
    redirect(links[todaySchedule[5]], todaySchedule[5]);
  } else if(hour == 15 && min < 50) {
    if(todaySchedule[6] != '') {
      elements[6].classList.add('selected');
      updateH2(todaySchedule[6], links[todaySchedule[6]], true);
      if(min >= 45) {
        redirect(links[todaySchedule[6]], todaySchedule[6]);
      }
    } else {
      updateH2('종례', links.HR, true);
    }
  } else if(hour == 15 || (hour <= 16 && min < 40)) {
    if(todaySchedule[6] != '') {
      elements[6].classList.add('selected');
      updateH2(todaySchedule[6], links[todaySchedule[6]], false);
      redirect(links[todaySchedule[6]], todaySchedule[6]);
    } else {
      updateH2('종례', links.HR, true);
    }
  } else if(hour == 16 && min < 45) {
    updateH2('종례', links.HR, true);
    redirect(links.HR, '종례');
  } else if(hour == 16) {
    updateH2('종례', links.HR, false);
    redirect(links.HR, '종례');
  } else {
    document.getElementsByTagName('h2')[0].innerHTML = '수업끝 !!';
    recentName = '';
  }
};

const classSelected = e => {
  localStorage.setItem('class', e.value);
  initialize();
};

const updateH2 = (className, classLink, isReady) => {
  if(classLink.indexOf("pwd") != -1) {
    classLink = `zoommtg://zoom.us/join?action=join&confno=${classLink}`;
  }
  document.getElementsByTagName('h2')[0].innerHTML = `${isReady ? '다음 수업 준비' : '지금 수업중'} : <span>${className}</span>, <a href="${classLink}" target="_blank">여기</a>를 눌러 수동접속`;
};

const noSchedule = () => {
  document.getElementsByTagName('h2')[0].innerHTML = '오늘은 수업이 없는 날입니다!';
};

const scheduleClicked = n => {
  explanation.textContent = '링크를 실행하는 중..';
  call(links[todaySchedule[n]]);
};

const redirect = (link, name) => {
  if(recentName == name) return;
  call(link);
  recentName = name;
};

const call = (link) => {
  let a = document.createElement("a");
  if(isMobile()) {
    a.href = `https://zoom.us/j/${link}`.replace('&', '?');
  } else {
    a.href = `zoommtg://zoom.us/join?action=join&confno=${link}`;
  }
  if(link.indexOf("pwd") == -1) {
    a.target = "_blank";
    a.href = link;
  }
  a.click();
};