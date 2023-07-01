const AboutUs = (props) => {
  return (
    <div className="flex w-[505px] h-[186px] flex-col items-end justify-between text-right font-yekan">
      <div className="flex items-center justify-center">
        <Logo />
        <AboutIcon />
      </div>
      <p className="text-lg font-medium leading-10 text-white">
        این شرکت از سال هزار و سیصدو نود ونه بطور رسمی فعالیت خود را در حوزه
        فناوری اطلاعات، هوش مصنوعی و مهندسی نرم افزارآغار کرده است
      </p>
      <a href="/" className="text-lg font-bold text-spring-green">
        مشاهده اطلاعات بیشتر
      </a>
    </div>
  );
};

const AboutIcon = () => {
  return (
    <svg
      width="48"
      height="49"
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.9801 19.8569H20.8537C18.9821 19.8569 17.4648 18.3062 17.4648 16.3933C17.4648 14.4804 18.9821 12.9297 20.8537 12.9297H20.9801C22.8517 12.9297 24.369 14.4804 24.369 16.3933C24.3689 18.3062 22.8516 19.8569 20.9801 19.8569Z"
        fill="#2BEE84"
      />
      <path
        d="M17.4648 23.4873H24.369V40.9855H17.4648V23.4873Z"
        fill="#2BEE84"
      />
      <path
        d="M20.8706 5.58252C15.2955 5.58252 10.0541 7.80614 6.11213 11.8439C2.17069 15.881 0 21.2484 0 26.9575C0 32.9409 2.45231 38.6474 6.74419 42.692L6.40941 46.6172C6.38184 46.9398 6.51572 47.2548 6.76509 47.4545C7.01456 47.6543 7.34559 47.7118 7.64578 47.6074L11.7376 46.1825C14.5925 47.6093 17.6632 48.3324 20.8707 48.3324C26.4458 48.3324 31.6871 46.1088 35.6291 42.0711C39.5706 38.0339 41.7413 32.6665 41.7413 26.9575C41.7413 21.2484 39.5706 15.8809 35.6291 11.8439C31.687 7.80614 26.4458 5.58252 20.8706 5.58252ZM20.8706 46.4162C17.8285 46.4162 14.9228 45.7021 12.2341 44.2935C12.1004 44.2236 11.9538 44.188 11.8064 44.188C11.7045 44.188 11.6023 44.205 11.504 44.2392L8.40206 45.3194L8.65256 42.383C8.67844 42.0797 8.56172 41.7819 8.33822 41.5807C4.23075 37.8838 1.875 32.5539 1.875 26.9575C1.875 16.228 10.3964 7.49886 20.8706 7.49886C31.3448 7.49886 39.8662 16.228 39.8662 26.9575C39.8662 37.687 31.3448 46.4162 20.8706 46.4162Z"
        fill="white"
      />
      <path
        d="M36.5176 0.33252C35.9999 0.33252 35.5801 0.761588 35.5801 1.29069C35.5801 1.81979 35.9999 2.24886 36.5176 2.24886C41.8151 2.24886 46.125 6.6643 46.125 12.0917C46.125 12.6208 46.5448 13.0498 47.0625 13.0498C47.5802 13.0498 48 12.6208 48 12.0917C48 5.60763 42.849 0.33252 36.5176 0.33252Z"
        fill="white"
      />
      <path
        d="M37.5039 5.18066C36.9862 5.18066 36.5664 5.60973 36.5664 6.13883C36.5664 6.66794 36.9862 7.097 37.5039 7.097C39.6477 7.097 41.3918 8.88437 41.3918 11.0814C41.3918 11.6105 41.8116 12.0395 42.3293 12.0395C42.847 12.0395 43.2668 11.6105 43.2668 11.0814C43.2668 7.8277 40.6817 5.18066 37.5039 5.18066Z"
        fill="white"
      />
    </svg>
  );
};

const Logo = () => {
  return (
    <svg
      width="129"
      height="49"
      viewBox="0 0 129 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1141_453)">
        <path
          d="M50.2389 13.437C49.8722 13.311 49.4839 13.2608 49.0974 13.2895C48.7109 13.3182 48.3342 13.4252 47.9898 13.6041C47.6455 13.783 47.3406 14.0301 47.0936 14.3306C46.8465 14.631 46.6624 14.9786 46.5522 15.3524C46.4452 15.6765 46.3908 16.0159 46.3914 16.3574H45.225C45.187 15.2551 45.5847 14.1827 46.331 13.3749C47.0772 12.5671 48.1113 12.0898 49.2066 12.0477C49.532 12.0421 49.8567 12.0806 50.1719 12.1623C50.5118 11.4339 50.5623 10.6023 50.3131 9.83756C50.0639 9.07285 49.5339 8.43279 48.8313 8.04824C48.4391 7.84602 48.0051 7.73973 47.5644 7.73799C47.4193 7.73201 47.2801 7.67879 47.1677 7.58636C47.0553 7.49392 46.9757 7.36726 46.941 7.22542C46.8468 6.52406 46.5066 5.87965 45.9818 5.40847C45.457 4.93728 44.782 4.67033 44.0788 4.6558C43.9337 4.64981 43.7945 4.5966 43.6821 4.50416C43.5697 4.41172 43.4901 4.28506 43.4554 4.14322C43.4056 3.75371 43.2785 3.37823 43.0817 3.03905C42.885 2.69987 42.6226 2.40388 42.31 2.16865C41.9974 1.93341 41.6411 1.76372 41.2622 1.66961C40.8832 1.5755 40.4893 1.55891 40.1039 1.62081C39.768 1.68204 39.4457 1.80308 39.1521 1.97826C38.6954 2.26075 38.3199 2.65814 38.0625 3.13123C37.805 3.60432 37.6746 4.13676 37.6841 4.67603H36.5178C36.5173 4.05547 36.6465 3.44174 36.8971 2.87471C37.1477 2.30768 37.514 1.80004 37.9723 1.38476C37.5753 1.022 37.1083 0.745355 36.6003 0.572052C36.0924 0.39875 35.5545 0.332497 35.02 0.377416C34.4856 0.422334 33.966 0.57746 33.4937 0.833144C33.0214 1.08883 32.6065 1.4396 32.2748 1.86361C32.1903 1.96978 32.0707 2.04183 31.9377 2.0666C31.8048 2.09136 31.6675 2.06719 31.5508 1.99849C31.2183 1.80157 30.8492 1.67518 30.4663 1.62711C30.0834 1.57903 29.6948 1.61029 29.3244 1.71895C28.9539 1.82761 28.6095 2.01137 28.3123 2.25894C28.0151 2.50652 27.7713 2.81266 27.596 3.15854C27.4269 3.47366 27.3135 3.81598 27.2609 4.1702C27.2638 4.1971 27.2638 4.22423 27.2609 4.25113C27.2845 5.01392 27.5966 5.73885 28.1336 6.27785C28.6705 6.81686 29.3917 7.12925 30.1499 7.15123V8.38546C29.1563 8.3627 28.2039 7.98189 27.4658 7.31227C26.7277 6.64266 26.253 5.72874 26.1281 4.73673C25.5231 4.85998 24.9709 5.16859 24.5473 5.62023C24.1236 6.07186 23.8493 6.64436 23.7619 7.25914C23.7425 7.40098 23.6728 7.53099 23.5656 7.62519C23.4584 7.71939 23.321 7.77143 23.1787 7.77172H23.1184C22.7266 7.78392 22.3411 7.8737 21.9838 8.03592C21.6265 8.19813 21.3046 8.42961 21.0362 8.71711C20.7679 9.00461 20.5586 9.3425 20.4201 9.71146C20.2817 10.0804 20.2169 10.4732 20.2294 10.8674C20.2327 11.4696 20.4046 12.0586 20.7254 12.567C20.9829 12.9774 21.3389 13.3161 21.7606 13.5518C22.1823 13.7875 22.6561 13.9127 23.1385 13.9159V15.1501C22.5462 15.147 21.9621 15.011 21.4287 14.752C20.8953 14.4929 20.426 14.1175 20.0551 13.6528C19.3597 14.0511 18.8427 14.7026 18.6107 15.4731C18.3787 16.2436 18.4495 17.0743 18.8083 17.7939C19.0446 18.2876 19.4148 18.7041 19.8761 18.9952C20.3375 19.2864 20.8712 19.4404 21.4158 19.4396C21.4942 19.4413 21.5714 19.4586 21.6431 19.4904C21.7148 19.5222 21.7796 19.5679 21.8338 19.6249C21.8879 19.6819 21.9304 19.749 21.9588 19.8225C21.9871 19.8961 22.0008 19.9745 21.999 20.0533C21.991 20.3686 22.0448 20.6825 22.1573 20.9769C22.2699 21.2713 22.439 21.5405 22.655 21.7691C22.871 21.9977 23.1297 22.1812 23.4162 22.3092C23.7028 22.4372 24.0115 22.5071 24.3249 22.515C24.6008 22.5121 24.8736 22.4572 25.1293 22.3531C24.6899 20.8079 24.8635 19.1513 25.6137 17.7323C26.3638 16.3132 27.632 15.2425 29.1511 14.7454C29.6642 14.5898 30.1971 14.5102 30.7331 14.5094V15.7436C29.4666 15.7772 28.2651 16.3153 27.3928 17.2398C26.5205 18.1643 26.0487 19.3994 26.0811 20.6738C26.0795 21.2743 26.1839 21.8703 26.3895 22.4341C26.6435 23.2167 27.1031 23.9157 27.7197 24.457C28.3362 24.9983 29.0867 25.3618 29.8918 25.509C30.6969 25.6562 31.5265 25.5817 32.2929 25.2933C33.0593 25.0048 33.734 24.5133 34.2454 23.8706C34.3109 23.7889 34.3974 23.7268 34.4955 23.6911C34.5936 23.6554 34.6995 23.6476 34.8018 23.6683C35.1799 23.7489 35.5705 23.7498 35.9489 23.6709C36.3273 23.5919 36.6854 23.4349 37.0004 23.2097C37.0634 23.1651 37.1348 23.1341 37.2103 23.1184C37.2857 23.1028 37.3635 23.1028 37.4389 23.1186C37.5143 23.1344 37.5856 23.1656 37.6486 23.2103C37.7115 23.255 37.7647 23.3121 37.8048 23.3783C37.8325 23.4227 37.855 23.4703 37.8718 23.5199C37.9845 23.8936 38.1714 24.2405 38.4211 24.5394C38.6709 24.8384 38.9783 25.0832 39.3249 25.2591C39.6714 25.435 40.0498 25.5384 40.4372 25.5629C40.8246 25.5874 41.2129 25.5325 41.5786 25.4016C42.1576 25.175 42.654 24.7758 43.0014 24.2575C43.3488 23.7393 43.5306 23.1266 43.5225 22.5015H44.6888C44.7053 23.5019 44.3711 24.4762 43.7447 25.2532C43.1183 26.0302 42.2398 26.5604 41.2635 26.7505C41.3674 27.2801 41.6479 27.7581 42.0588 28.1053C42.4696 28.4524 42.9861 28.6478 43.5225 28.6592C43.8066 28.6654 44.0832 28.7523 44.3204 28.9098C44.5575 29.0673 44.7457 29.289 44.8631 29.5494C45.0746 30.0128 45.4123 30.4063 45.837 30.6844C46.2617 30.9626 46.7561 31.1139 47.2628 31.1209L46.9142 30.1969C46.7259 29.7001 46.6552 29.166 46.7075 28.6368C46.7599 28.1077 46.9339 27.5982 47.2158 27.1484C47.4309 26.8052 47.5448 26.4076 47.5443 26.0019V24.4709C47.5436 24.3648 47.5697 24.2603 47.6201 24.1671C47.6705 24.0739 47.7436 23.9951 47.8325 23.9381C48.4342 23.5576 48.889 22.982 49.1218 22.3064C49.3546 21.6308 49.3514 20.8955 49.1128 20.2219C49.0594 20.0705 49.0658 19.9042 49.1306 19.7574C49.1955 19.6106 49.3139 19.4944 49.4613 19.4328H49.5954C50.3765 19.3188 51.0824 18.9026 51.5632 18.2728C52.0439 17.643 52.2614 16.8493 52.1694 16.0606C52.1147 15.4921 51.9048 14.95 51.5629 14.4941C51.2211 14.0382 50.7605 13.6864 50.2322 13.4775L50.2389 13.437ZM38.2204 20.0331V18.7988C39.1698 18.7723 40.0702 18.3687 40.7246 17.6761C41.379 16.9835 41.7343 16.0583 41.7126 15.1029H42.879C42.9079 16.3728 42.4377 17.603 41.5704 18.5261C40.7032 19.4492 39.5089 19.9908 38.2472 20.0331H38.2204Z"
          fill="white"
        />
        <path
          d="M78.9882 6.68598C78.9279 7.13786 78.8139 8.43953 78.6598 10.5843C78.5324 12.5411 78.2409 14.4837 77.7884 16.3912C76.7204 20.2355 73.7286 24.6823 68.813 29.7317C63.8974 34.781 57.4826 39.1446 49.5686 42.8226C41.3607 46.5629 32.4365 48.444 23.4267 48.3327C13.9084 48.3327 7.03556 46.46 2.80818 42.7147C0.922387 40.9971 -0.0205078 39.1626 -0.0205078 37.2112C-0.0205078 36.3075 0.187287 35.8623 0.602875 35.7679C0.902878 35.6972 1.21666 35.7136 1.50778 35.8151C8.26445 39.2503 15.9394 40.9566 24.5327 40.9341C32.6959 40.9903 40.8059 39.6094 48.4961 36.8538C55.8829 34.156 61.7234 31.0738 66.0178 27.6072C70.3122 24.1405 73.2929 21.1617 74.9597 18.6708C75.4066 17.9604 75.63 16.1619 75.63 13.2753C75.63 12.2951 76.4321 9.7974 78.0364 5.78223C78.3045 5.13476 78.5279 4.81104 78.7067 4.81104C78.9078 4.81104 79.015 5.00662 79.015 5.40454C79.0381 5.83176 79.0291 6.26012 78.9882 6.68598Z"
          fill="white"
        />
        <path
          d="M84.8802 16.6542C84.8046 18.0615 84.4443 19.4385 83.8212 20.7008C83.238 21.8069 82.5811 22.3599 81.8438 22.3599V19.0619C82.0797 16.1246 82.6648 13.2263 83.5865 10.4291C84.5563 7.48851 85.3651 6.03397 86.013 6.06544C86.3616 6.12614 86.375 6.73988 86.06 7.81899C85.3502 10.003 84.9222 12.2697 84.7864 14.5634C84.7864 15.0288 84.8199 15.7234 84.8802 16.6542Z"
          fill="white"
        />
        <path
          d="M97.3484 23.1083C97.0783 23.2047 96.7964 23.2637 96.5105 23.2837C96.2156 23.2837 95.9408 23.3376 95.6727 23.3646C95.1374 23.3675 94.6141 23.5243 94.1645 23.8165C93.1505 24.7552 92.2627 25.8231 91.5235 26.9931C90.1829 29.0164 88.601 30.0551 86.8313 30.0551C85.957 30.1016 85.0889 29.8819 84.3405 29.4248C83.592 28.9676 82.9977 28.2941 82.6352 27.4922C81.9863 25.8586 81.6959 24.1032 81.784 22.3462C81.839 20.3366 82.1961 18.3469 82.843 16.4448C83.4061 15.1499 83.9423 14.5024 84.4451 14.5024C84.5523 14.5024 84.6797 14.6036 84.8204 14.8127V16.9911C84.9112 17.8173 85.0979 18.6299 85.3768 19.4124C85.6574 20.293 86.1945 21.0684 86.9185 21.638C87.7994 22.1893 88.8245 22.4619 89.8611 22.4204C90.5923 22.4568 91.3227 22.3334 92.0019 22.0586C92.6811 21.7838 93.2931 21.3642 93.7958 20.8287C94.6873 19.7968 95.3643 19.2235 95.8067 19.0954C96.1015 19.0206 96.4101 19.0206 96.7049 19.0954C96.9904 19.1619 97.2836 19.1891 97.5763 19.1763C98.3588 19.1456 99.1058 18.8401 99.6878 18.313C100.353 17.7107 100.915 17.002 101.35 16.2155C101.369 16.1611 101.401 16.1124 101.444 16.0739C101.484 16.0284 101.537 15.9968 101.596 15.9835C101.655 15.9702 101.717 15.9759 101.772 15.9997C102.006 16.0737 102.246 16.1212 102.49 16.1413C102.728 16.1584 102.965 16.0916 103.16 15.9525C103.433 15.7445 103.661 15.4829 103.83 15.1836C104.143 14.662 104.418 14.1189 104.655 13.5582C104.889 12.8838 105.117 12.5938 105.325 12.7017C105.533 12.8096 105.506 13.0996 105.399 13.7943C105.134 15.0875 104.711 16.3427 104.139 17.5307C103.776 18.3152 103.258 19.0174 102.617 19.5945C102.021 20.0474 101.335 20.367 100.606 20.5319C100.119 21.0682 99.59 21.5644 99.0242 22.0157C98.5106 22.4454 97.948 22.8122 97.3484 23.1083Z"
          fill="white"
        />
        <path
          d="M115.56 12.8972C116.191 13.6346 116.506 14.8711 116.506 16.6066C116.488 19.5984 115.69 22.5333 114.193 25.1181C112.406 28.2655 110.033 30.2169 107.074 30.9722C105.734 31.3027 105.063 31.0532 105.063 30.2101C105.071 29.7922 105.195 29.3848 105.42 29.0335C105.645 28.6821 105.962 28.4006 106.337 28.2205C110.944 25.3609 113.248 23.2184 113.248 21.7931C113.252 21.7057 113.231 21.619 113.187 21.5436C113.142 21.4682 113.078 21.4072 113 21.3682C112.91 21.322 112.807 21.3044 112.707 21.3176C112.606 21.3309 112.512 21.3743 112.437 21.4424C112.171 21.6031 111.862 21.6784 111.552 21.6582C110.211 21.6582 109.36 21.1591 109.032 20.2621C109.032 18.9672 109.925 16.6673 111.713 13.3626C112.263 12.3172 112.906 11.7979 113.643 11.7979C114.024 11.8257 114.394 11.9389 114.726 12.1291C115.057 12.3193 115.343 12.5817 115.56 12.8972Z"
          fill="white"
        />
        <path
          d="M114.294 17.9626C114.297 17.307 114.436 16.6593 114.703 16.0607C114.728 16.0047 114.757 15.9506 114.79 15.8989C115.307 15.12 115.953 14.4357 116.7 13.8755C117.05 13.6133 117.381 13.3271 117.692 13.019C118.083 12.5829 118.402 12.0865 118.637 11.5487C118.965 10.8956 119.245 10.2194 119.475 9.52539C119.483 9.49728 119.495 9.47015 119.509 9.44445C119.958 8.4193 120.3 7.67067 120.548 7.18507C120.821 6.66906 121.171 6.19823 121.587 5.78898C121.82 5.51798 122.106 5.29668 122.426 5.13802C122.746 4.97936 123.094 4.88654 123.45 4.86499C123.972 4.90227 124.475 5.07416 124.911 5.36408C125.026 5.45407 125.159 5.51821 125.301 5.5522C125.442 5.58619 125.59 5.58922 125.732 5.5611C125.875 5.53297 126.011 5.47435 126.129 5.38917C126.248 5.304 126.347 5.19425 126.419 5.06733L126.688 4.57498C126.969 4.08264 127.204 3.83984 127.391 3.83984C127.579 3.83984 127.988 4.12311 128.383 4.69638C128.739 5.08901 128.954 5.58992 128.993 6.11945C129.011 7.29779 128.638 8.44845 127.934 9.3905C127.643 9.82153 127.254 10.177 126.799 10.4278C126.345 10.6787 125.838 10.8178 125.32 10.8338C124.839 10.7904 124.37 10.6625 123.933 10.4561C123.506 10.2694 123.054 10.1488 122.592 10.0987C121.922 10.0987 121.251 10.5775 120.775 11.542C119.488 14.1318 118.825 15.4402 118.798 15.4537C117.985 16.7958 117.064 18.0681 116.043 19.2576C115.994 19.3121 115.94 19.3618 115.882 19.406L115.111 19.9927C114.813 20.2338 114.502 20.459 114.18 20.6672L114.294 17.9626Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1141_453">
          <rect
            width="129"
            height="48"
            fill="white"
            transform="translate(0 0.33252)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AboutUs;
