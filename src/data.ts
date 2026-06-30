export interface Passage {
  id: string;
  title: string;
  author: string;
  source: string;
  year: string;
  paragraphs: { titleEn?: string; titleLa?: string; en: string; la: string }[];
}

export const passages: Passage[] = [
  {
    id: 'angelus',
    title: 'The Angelus',
    author: 'The Roman Catholic Church',
    source: 'Devotional Prayer',
    year: '11th century',
    paragraphs: [
      {
        en: 'The Angel of the Lord declared unto Mary: And she conceived of the Holy Spirit.',
        la: 'Angelus Domini nuntiavit Mariae: Et concepit de Spiritu Sancto.',
      },
      {
        en: 'Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.',
        la: 'Ave Maria, gratia plena, Dominus tecum; benedicta tu in mulieribus, et benedictus fructus ventris tui, Iesus. Sancta Maria, Mater Dei, ora pro nobis peccatoribus, nunc et in hora mortis nostrae. Amen.',
      },
      {
        en: 'Behold the handmaid of the Lord: Be it done unto me according to Thy word.',
        la: 'Ecce ancilla Domini: Fiat mihi secundum verbum tuum.',
      },
      {
        en: 'Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.',
        la: 'Ave Maria, gratia plena, Dominus tecum; benedicta tu in mulieribus, et benedictus fructus ventris tui, Iesus. Sancta Maria, Mater Dei, ora pro nobis peccatoribus, nunc et in hora mortis nostrae. Amen.',
      },
      {
        en: 'And the Word was made Flesh: And dwelt among us.',
        la: 'Et Verbum caro factum est: Et habitavit in nobis.',
      },
      {
        en: 'Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.',
        la: 'Ave Maria, gratia plena, Dominus tecum; benedicta tu in mulieribus, et benedictus fructus ventris tui, Iesus. Sancta Maria, Mater Dei, ora pro nobis peccatoribus, nunc et in hora mortis nostrae. Amen.',
      },
      {
        en: 'Pray for us, O Holy Mother of God, that we may be made worthy of the promises of Christ.',
        la: 'Ora pro nobis, sancta Dei Genetrix, ut digni efficiamur promissionibus Christi.',
      },
      {
        en: 'Let us pray: Pour forth, we beseech Thee, O Lord, Thy grace into our hearts; that we, to whom the incarnation of Christ, Thy Son, was made known by the message of an angel, may by His Passion and Cross be brought to the glory of His Resurrection, through the same Christ Our Lord. Amen.',
        la: 'Oremus: Gratiam tuam, quaesumus, Domine, mentibus nostris infunde; ut qui, angelo nuntiante, Christi Filii tui incarnationem cognovimus, per passionem eius et crucem ad resurrectionis gloriam perducamur. Per eundem Christum Dominum nostrum. Amen.',
      },
    ],
  },
  {
    id: 'rosary-prayers',
    title: 'Rosary Prayers',
    author: 'The Roman Catholic Church',
    source: 'Catholic Devotional Prayers',
    year: 'Various',
    paragraphs: [
      {
        titleEn: 'The Sign of the Cross',
        titleLa: 'Signum Crucis',
        en: 'In the name of the Father, and of the Son, and of the Holy Spirit. Amen.',
        la: 'In nomine Patris, et Filii, et Spiritus Sancti. Amen.',
      },
      {
        titleEn: "The Apostles' Creed",
        titleLa: 'Symbolum Apostolorum',
        en: 'I believe in God, the Father Almighty, Creator of heaven and earth; and in Jesus Christ, His only Son, our Lord; who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died, and was buried. He descended into hell. On the third day, He rose again; He ascended into heaven and sits at the right hand of God, the Father Almighty. From there, He will come to judge the living and the dead. I believe in the Holy Spirit, the Holy Catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.',
        la: 'Credo in Deum, Patrem omnipotentem, Creatorem caeli et terrae; et in Iesum Christum, Filium eius unicum, Dominum nostrum; qui conceptus est de Spiritu Sancto, natus ex Maria Virgine, passus sub Pontio Pilato, crucifixus, mortuus et sepultus; descendit ad inferos; tertia die resurrexit a mortuis; ascendit ad caelos, sedet ad dexteram Dei Patris omnipotentis; inde venturus est iudicare vivos et mortuos. Credo in Spiritum Sanctum, sanctam Ecclesiam Catholicam, sanctorum communionem, remissionem peccatorum, carnis resurrectionem, vitam aeternam. Amen.',
      },
      {
        titleEn: 'The Our Father',
        titleLa: 'Pater Noster',
        en: 'Our Father, who art in heaven, hallowed be Thy name; Thy kingdom come; Thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us. And do not lead us into temptation, but deliver us from the evil one.',
        la: 'Pater noster, qui es in caelis, sanctificetur nomen tuum; adveniat regnum tuum; fiat voluntas tua, sicut in caelo et in terra. Panem nostrum cotidianum da nobis hodie; et dimitte nobis debita nostra, sicut et nos dimittimus debitoribus nostris. Et ne nos inducas in tentationem, sed libera nos a malo.',
      },
      {
        titleEn: 'The Hail Mary',
        titleLa: 'Ave Maria',
        en: 'Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.',
        la: 'Ave Maria, gratia plena, Dominus tecum; benedicta tu in mulieribus, et benedictus fructus ventris tui, Iesus. Sancta Maria, Mater Dei, ora pro nobis peccatoribus, nunc et in hora mortis nostrae. Amen.',
      },
      {
        titleEn: 'The Glory Be',
        titleLa: 'Gloria Patri',
        en: 'Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.',
        la: 'Gloria Patri, et Filio, et Spiritui Sancto. Sicut erat in principio, et nunc, et semper, et in saecula saeculorum. Amen.',
      },
      {
        titleEn: 'The Fatima Prayer',
        titleLa: 'Oratio Fatimae',
        en: 'O my Jesus, forgive us our sins, save us from the fires of hell, and lead all souls to Heaven, especially those in most need of Your Mercy. (Our Lady at Fatima, 13th July 1917)',
        la: 'O mi Iesu, dimitte nobis debita nostra, salva nos ab igne inferni, omnes animas perduc in caelum, praesertim illas quae maxime indigent misericordia tua. (Beata Maria Virgo Fatimae, 13 Iulii 1917)',
      },
      {
        titleEn: 'The Hail Holy Queen',
        titleLa: 'Salve Regina',
        en: 'Hail, holy Queen, Mother of Mercy! Our life, our sweetness, and our hope! To thee do we cry, poor banished children of Eve; to thee do we send up our sighs, mourning and weeping in this valley of tears. Turn, then, most gracious Advocate, thine eyes of mercy toward us; and after this our exile show unto us the blessed fruit of thy womb, Jesus; O clement, O loving, O sweet Virgin Mary.',
        la: 'Salve, Regina, Mater misericordiae! Vita, dulcedo, et spes nostra, salve! Ad te clamamus, exsules filii Evae; ad te suspiramus, gementes et flentes in hac lacrimarum valle. Eia ergo, Advocata nostra, illos tuos misericordes oculos ad nos converte; et Iesum, benedictum fructum ventris tui, nobis post hoc exsilium ostende; O clemens, O pia, O dulcis Virgo Maria.',
      },
      {
        titleEn: 'Concluding Prayers',
        titleLa: 'Orationes Conclusivae',
        en: 'Pray for us, O Holy Mother of God. That we may be made worthy of the promises of Christ. Let us pray, O God, whose only begotten Son, by His life, death, and resurrection, has purchased for us the rewards of eternal salvation. Grant, we beseech Thee, that while meditating on these mysteries of the most holy Rosary of the Blessed Virgin Mary, that we may both imitate what they contain and obtain what they promise, through Christ our Lord. Amen.',
        la: 'Ora pro nobis, sancta Dei Genetrix. Ut digni efficiamur promissionibus Christi. Oremus: Deus, cujus Filius unigenitus, vitam, mortem, et resurrectionem suam nobis salutis aeternae praemia comparuit: concede, quaesumus, ut haec mysteria sacratissimo beatae Mariae Virginis Rosario frequentantes, et imitemur quod continent, et quod promittunt assequamur. Per eundem Christum Dominum nostrum. Amen.',
      },
    ],
  },
  {
    id: 'grace-before-meals',
    title: 'Grace Before Meals',
    author: 'The Roman Catholic Church',
    source: 'Catholic Devotional Prayer',
    year: 'Various',
    paragraphs: [
      {
        en: 'Bless us, O Lord, and these Thy gifts, which we are about to receive from Thy bounty, through Christ our Lord. Amen.',
        la: 'Benedic, Domine, nos et haec tua dona, quae de tua largitate sumus sumpturi, per Christum Dominum nostrum. Amen.',
      },
    ],
  },
];
