  export const data = (dataType) => {

    switch (dataType) {
      case 'statesData':
      return([
       {_id:1, name:'Alabama' , param: 'AL'},
       {_id:2, name:'Alaska' , param: 'AK'},
       {_id:3, name:'Arizona' , param: 'AZ'},
       {_id:4, name:'Arkansas' , param: 'AR'},
       {_id:5, name:'California' , param: 'CA'},
       {_id:6, name:'Colorado' , param: 'CO'},
       {_id:7, name:'Connecticut' , param: 'CT'},
       {_id:8, name:'Delaware' , param: 'DE'},
       {_id:9, name:'Florida' , param: 'FL'},
       {_id:10, name:'Georgia' , param: 'GA'},
       {_id:11, name:'Hawaii' , param: 'HI'},
       {_id:11, name:'Idaho' , param: 'ID'},
       {_id:12, name:'Illinois' , param: 'IL'},
       {_id:13, name:'Indiana' , param: 'IN'},
       {_id:14, name:'Iowa' , param: 'IA'},
       {_id:15, name:'Kansas' , param: 'KS'},
       {_id:16, name:'Kentucky' , param: 'KY'},
       {_id:17, name:'Louisiana' , param: 'LA'},
       {_id:18, name:'Maine' , param: 'ME'},
       {_id:19, name:'Maryland' , param: 'MD'},
       {_id:20, name:'Massachusetts' , param: 'MA'},
       {_id:21, name:'Michigan' , param: 'MI'},
       {_id:22, name:'Minnesota' , param: 'MN'},
       {_id:23, name:'Mississippi' , param: 'MS'},
       {_id:24, name:'Missouri' , param: 'MO'},
       {_id:25, name:'Montana' , param: 'MT'},
       {_id:26, name:'Nebraska' , param: 'NE'},
       {_id:27, name:'Nevada' , param: 'NV'},
       {_id:28, name:'New Hampshire' , param: 'NH'},
       {_id:29, name:'New Jersey' , param: 'NJ'},
       {_id:30, name:'New Mexico' , param: 'NM'},
       {_id:31, name:'New York' , param: 'NY'},
       {_id:31, name:'North Carolina' , param: 'NC'},
       {_id:32, name:'North Dakota' , param: 'ND'},
       {_id:33, name:'Ohio' , param: 'OH'},
       {_id:34, name:'Oklahoma' , param: 'OK'},
       {_id:35, name:'Oregon' , param: 'OR'},
       {_id:36, name:'Pennsylvania' , param: 'PA'},
       {_id:37, name:'South Carolina' , param: 'SC'},
       {_id:38, name:'South Dakota' , param: 'SD'},
       {_id:39, name:'Tennessee' , param: 'TN'},
       {_id:40, name:'Texas' , param: 'TX'},
       {_id:41, name:'Utah' , param: 'UT'},
       {_id:42, name:'Vermont' , param: 'VT'},
       {_id:43, name:'Virginia' , param: 'VA'},
       {_id:44, name:'Washington' , param: 'WA'},
       {_id:45, name:'West Virginia' , param: 'WV'},
       {_id:46, name:'Wisconsin' , param: 'WI'},
       {_id:47, name:'Wyoming' , param: 'WY'},
     ])
      break;

      case 'yearsData':
        return([
          {_id:1, name:1990, param:1990},
          {_id:2, name:1991, param:1991},
          {_id:3, name:1992, param:1992},
          {_id:4, name:1993, param:1993},
          {_id:5, name:1994, param:1994},
          {_id:6, name:1995, param:1995},
          {_id:7, name:1996, param:1996},
          {_id:8, name:1997, param:1997},
          {_id:9, name:1998, param:1998},
          {_id:10, name:1999, param:1999},
          {_id:11, name:2000, param:2000},
          {_id:12, name:2001, param:2001},
          {_id:13, name:2002, param:2002},
          {_id:14, name:2003, param:2003},
          {_id:15, name:2004, param:2004},
          {_id:16, name:2005, param:2005},
          {_id:17, name:2006, param:2006},
          {_id:18, name:2007, param:2007},
          {_id:19, name:2008, param:2008},
          {_id:20, name:2009, param:2009},
          {_id:21, name:2010, param:2010},
          {_id:22, name:2011, param:2011},
          {_id:23, name:2012, param:2012},
          {_id:24, name:2013, param:2013},
          {_id:25, name:2014, param:2014},
          {_id:26, name:2015, param:2015},
          {_id:27, name:2016, param:2016},
          {_id:28, name:2017, param:2017},
        ])
        break;

        case 'institutionTypeData':
          return([
            {_id:1, name:'TYPE_1', param:'TYPE_1'},
            {_id:2, name:'TYPE_2', param:'TYPE_2'},
            {_id:3, name:'TYPE_3', param:'TYPE_3'},
          ])
          break;
      default:
    }
  }
