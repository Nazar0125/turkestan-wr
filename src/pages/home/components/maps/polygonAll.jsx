import React from "react";
import { Polygon, Polyline } from 'react-leaflet';

export const PolygonAll = () => {
    
    const polyline = [[[42.36371297005126,68.34526842456359],[42.38713254981428,68.3617479167511],[42.34334096714094,68.33290880542297],[42.32194320525831,68.31368273120421],[42.30767395675342,68.31093614917296],[42.29340144926807,68.34114855151671],[42.28116527764101,68.36037462573549],[42.26994668376671,68.37685411792296],[42.25362513791457,68.40157335620422],[42.25081944360542,68.4125596843292],[42.249033936312316,68.42182939868466],[42.24597294821643,68.43968218188782],[42.245462768987295,68.4606248698761],[42.244952585602036,68.4705812297394],[42.249033936312316,68.48191088061827],[42.254900411947496,68.49255388598937],[42.26102136571134,68.50010698657532],[42.26484665788429,68.50182360034484],[42.269436699882235,68.50216692309877],[42.27734098301119,68.50079363208316],[42.282439990560874,68.49942034106748],[42.28932299141674,68.50113695483705],[42.29263675868474,68.50457018237607],[42.29518569092474,68.5110933147003],[42.29875402147849,68.51555651050111],[42.30359643001517,68.51727312427063],[42.31098675133621,68.51692980151674],[42.318630991608785,68.51692980151674],[42.32398140328356,68.51761644702452],[42.32933135664316,68.51933306079408],[42.334426124214666,68.52482622485658],[42.33977518274865,68.52928942065734],[42.343850348282196,68.53375261645814],[42.34919859926823,68.53546923022766],[42.35505568158648,68.53375261645814],[42.36365890103518,68.53933521068585],[42.36824168894473,68.54894824779525],[42.37311375193586,68.55920636863094],[42.37667763122443,68.56435620993955],[42.37871404220664,68.5688194057403],[42.38100492504588,68.57259595603328],[42.411182213626255,68.59217877154768],[42.43102338968514,68.58256573443832],[42.43051472058682,68.57295269732896],[42.42695392046741,68.5605930781883],[42.41932294839215,68.55303997760235],[42.415252714068316,68.54205364947737],[42.411182213626255,68.53450054889142],[42.41627029759798,68.5276340938133],[42.42237544949318,68.52832073932115],[42.43102338968514,68.53312725787579],[42.45289222711154,68.54548687701646],[42.46484055172259,68.56179470782698],[42.472465941095244,68.56814617877426],[42.47627828488995,68.56986279254377],[42.47894678635747,68.56866116290509],[42.50023943300015,68.54378015713115],[42.50150967205798,68.54069025234597],[42.50150967205798,68.53691370205298],[42.500747531742554,68.53090555385965],[42.49223632920858,68.485758611721],[42.45843407285501,68.4153774471702],[42.36371297005126,68.34526842456359]],[]]

    const polyline1 = [[[43.00782983773619,70.64284693682082],[43.00379829402708,70.64387690508255],[43.00001847977838,70.64490687334428],[42.99699445974634,70.6466234871138],[42.99397028981924,70.65040003740677],[42.993340235550825,70.65263163530717],[42.99289919369199,70.65537821733842],[42.99264716834136,70.65692316973099],[42.99283618745191,70.65838229143509],[42.9925211552757,70.65975558245071],[42.99201710041074,70.66078555071243],[42.99151304138209,70.66198718035112],[42.99100897818971,70.66370379412064],[42.99050491083365,70.66430460894],[42.98968579249963,70.66447627031694],[42.98918171421386,70.66393982851395],[42.98896117865454,70.66383254015336],[42.9881381086472,70.66467764423547],[42.98818536697149,70.66680195377525],[42.98861069024343,70.66796066806971],[42.98829563625255,70.67304613636195],[42.98850042153162,70.67469837711509],[42.98965035687369,70.67710163639245],[42.989508585194336,70.67969801471885],[42.9891462782952,70.68213346050442],[42.989083268180146,70.68436505840477],[42.98885485596765,70.68583490894491],[42.98848466884225,70.68627479122338],[42.9886658245246,70.68733694599328],[42.98818536697149,70.68827035473048],[42.98436319563299,70.69183696059937],[42.96318647634713,70.72428096084354],[42.9607595082723,70.73213446883912],[42.9617366109113,70.73608268050904],[42.96147855348417,70.73996512080858],[42.963007221426565,70.75140206004808],[42.966726295005735,70.75539318706227],[42.96910575294501,70.755886713521],[42.97219418259981,70.75417009975148],[42.97553455311632,70.75305430080128],[42.98101740664139,70.74910608913136],[42.98435729444083,70.7481619515581],[42.98826410107037,70.74490038539597],[42.99179261468904,70.74490038539597],[42.99368280591722,70.7455870309038],[42.9957619486402,70.74378458644581],[42.99743151196061,70.74305502559376],[42.99859702908476,70.74065176631646],[43.03355218870937,70.71979490901666],[43.03984828488566,70.72039572383596],[43.05561908015804,70.71811023272961],[43.06142133613452,70.71475460914446],[43.06318350208993,70.71235134986716],[43.066455960667604,70.71372464088279],[43.07123846825464,70.71441128639057],[43.08105401690487,70.71921780494522],[43.085332093793276,70.71853115943743],[43.10294453438864,70.72986081031637],[43.11049116150097,70.72917416480853],[43.11501868798644,70.72814419654685],[43.11897999693722,70.72599842933491],[43.12193509095477,70.72213604835346],[43.123758375126336,70.7180161753066],[43.12356976206027,70.71355297950583],[43.106655076483115,70.65656140235737],[43.10671796507492,70.65441563514548],[43.105019950255695,70.65012410072161],[43.10476838847023,70.64780667213279],[43.103950805477,70.64712002662495],[43.102441392597555,70.64746334937884],[43.10124641415285,70.64935162452535],[43.10093194223677,70.65192654517966],[43.09992562117335,70.65364315894917],[43.09954824647984,70.65853550819234],[43.09835321116261,70.66523030189352],[43.096906558033375,70.67029431251365],[43.09319542086035,70.67561581519918],[43.091056696561786,70.67973568824605],[43.078442983860306,70.68733170417622],[43.07558015621935,70.69153740791155],[43.07035750825432,70.69364025977923],[43.06774601617684,70.69548561958148],[43.06607837827255,70.69896176246478],[43.06563786251772,70.70149376777486],[43.06425127247605,70.70498785826986],[43.062426203094084,70.7066186413509],[43.05468478333445,70.70292792174645],[43.04757187970565,70.70224127623861],[43.04599811622275,70.70138296935383],[43.044613170719266,70.69752058837243],[43.04499088625241,70.69485983702967],[43.044361359062535,70.69176993224447],[43.04423545284379,70.68790755126302],[43.044621039816775,70.68733892295187],[43.04472333799173,70.68592271659203],[43.0455023723033,70.68508586737936],[43.04595090269001,70.68222126815148],[43.04539220643991,70.67971072051355],[43.04560466899805,70.67830524298972],[43.04513936071624,70.67695274761161],[43.04490328935798,70.67572966030077],[43.04501345610569,70.67397013118705],[43.04424228468717,70.67073002269701],[43.04315633286949,70.66952839305839],[43.04214905590534,70.66931381633718],[43.041897234061736,70.66806927135424],[43.041299153010925,70.66744699886283],[43.04052793456708,70.66609516551931],[43.03959931164816,70.66570892742115],[43.0375374033732,70.66317692211112],[43.0368290981678,70.66291943004565],[43.02838224636709,70.65453004336916],[43.018810122106785,70.64629029727543],[43.00782983773619,70.64284693682082]]]

    const polyline2 = [[[42.99116240176208,68.19534324785967],[42.991540448596226,68.19791816851398],[42.98813794277412,68.20169471880689],[42.975408368508766,68.19997810503739],[42.97660472723735,68.19697452601883],[42.985049229200335,68.1933696371028],[42.99116240176208,68.19534324785967]]]

    const polyline3 = [[[42.74485548050811,69.00846758763028],[42.71106443811692,69.00314608494493],[42.708532527461806,69.00572100559883],[42.706886729750074,69.01138583103842],[42.70815273189102,69.01584902683959],[42.709798495792754,69.01842394749373],[42.71233035443359,69.02271548191754],[42.71334306876105,69.02769366184914],[42.71388106647783,69.02880946079915],[42.71394436001798,69.0293673602746],[42.71337471581578,69.03013983647081],[42.713121538924526,69.03112688938833],[42.71290000829102,69.03292933384643],[42.71305824453912,69.03490343968126],[42.713216480380495,69.0355900851892],[42.71277341899989,69.0369204608603],[42.70391152234902,69.06739035526932],[42.70463951189963,69.06998673359578],[42.70588973475949,69.07423535267569],[42.707408958784455,69.0790633289023],[42.707345658531146,69.08421317021104],[42.708728903209305,69.0870316405847],[42.711893765188236,69.09046486812332],[42.7132862529645,69.09381226497398],[42.71702049663681,69.09801796870937],[42.71803313387529,69.10222367244496],[42.72581722682413,69.11115006404629],[42.72739923924943,69.1122658629964],[42.730183482416,69.11303833919321],[42.739345284117604,69.12125405055855],[42.7465573461217,69.13018044216008],[42.749910034554205,69.13189705592984],[42.753009527401304,69.13018044216008],[42.75699436022583,69.1315537331759],[42.76237031296313,69.13524445278036],[42.77297082542532,69.13213467232511],[42.77613238608211,69.12835812203228],[42.77682790760948,69.12569737068931],[42.77442516351864,69.11840176216887],[42.7779027890387,69.11265110604091],[42.77809247204609,69.1091320478132],[42.77113704575516,69.08973431221754],[42.76708989020279,69.08552860848235],[42.76525593515391,69.08226704232017],[42.76222030019716,69.07479977242441],[42.758615292636506,69.06604504219979],[42.75646483665462,69.06192516915293],[42.75482031959574,69.05814861885995],[42.75266973096237,69.0550587140748],[42.75070883463708,69.05093884102794],[42.74969673466514,69.04467320076914],[42.750139530451136,69.04338574044199],[42.75165766324261,69.04381489388436],[42.75292274529132,69.04535984627692],[42.75519982743391,69.050595518274],[42.75690758373699,69.05402874581308],[42.757287078700145,69.0550587140748],[42.75772981986518,69.05771946541758],[42.75931101230151,69.06149601571056],[42.76190407991716,69.06304096810312],[42.76367489254672,69.0590927564332],[42.76272624926381,69.05050968758552],[42.762093812280234,69.0476772748658],[42.76032295413232,69.0436432325074],[42.75848879730663,69.04235577218026],[42.75703408231814,69.04029583565685],[42.75412454914591,69.03308605782479],[42.752100444918284,69.02948116890876],[42.74798877821585,69.01712154976816],[42.74760922590084,69.0147182904908],[42.74697663350724,69.01034092537851],[42.74485548050811,69.00846758763028]]]

    const polyline5 = [[[43.0840974780574,68.47392764135941],[43.08522988280176,68.48089065596139],[43.08375932533018,68.48505344435303],[43.072454470349776,68.50283136677788],[43.07059818399598,68.51070633244501],[43.070960006965834,68.52392425846985],[43.06942549761357,68.52717275585736],[43.06316746745457,68.53248942824928],[43.05984294249852,68.54447616329706],[43.05016560337175,68.54878915539273],[43.048151264617374,68.55127824535926],[43.04431124680992,68.56297267666423],[43.039101655342755,68.56475366344996],[43.024843827101826,68.55924922114373],[43.01508219755197,68.56032210474972],[42.999050841375364,68.56671649104146],[42.99788533292143,68.56504279261564],[42.997759330673915,68.56182414179798],[43.000027331315046,68.55680304652226],[43.011977647507365,68.54898897663179],[43.02230655927424,68.54916063800873],[43.026336879420654,68.5477873469931],[43.03199809194637,68.53693434467971],[43.04232361158723,68.52526137104695],[43.04650998522098,68.52624842396442],[43.04550276371554,68.53405901661579],[43.046289656939955,68.53573271504109],[43.05061011789721,68.53317870821203],[43.053127929268115,68.52450980867593],[43.06083807898201,68.52163448061195],[43.06149890352486,68.51871623720376],[43.05794295357352,68.51300849642006],[43.05822617843907,68.50970401491371],[43.06351280074337,68.49974765505041],[43.082169648353144,68.47378387178625],[43.08323917617363,68.473740956442],[43.0840974780574,68.47392764135941]]]

    const polyline6 = [[[43.04861193953475,68.47905089475422],[43.047793601573936,68.48119666196617],[43.041498326566774,68.48377158262046],[43.034950550357465,68.47999503232748],[43.0340061014887,68.48128249265463],[43.03392285238978,68.48560268392157],[43.03587469991627,68.48920757283754],[43.04701792196689,68.48869258870671],[43.053753231448226,68.4844010542829],[43.05658561571491,68.48079616536687],[43.058583940892746,68.47212726583071],[43.054602960562875,68.4678357314069],[43.049998556093655,68.46686664153934],[43.04751209023439,68.47036424209475],[43.04861193953475,68.47905089475422]]]

    const polyline7 = [[[43.10380817371259,68.41571565539252],[43.11097738985602,68.42421289355168],[43.108118974793804,68.42862301799038],[43.09989547712547,68.43136617951338],[43.090208780306234,68.42922041230145],[43.08756668607048,68.42398474030438],[43.09417170643968,68.42286894135417],[43.10127916497908,68.41608831696453],[43.10380817371259,68.41571565539252]]]

    const polyline8 = [[[43.08510281801367,68.36839991744482],[43.08856935718274,68.37265431691081],[43.08677647171007,68.38625848103435],[43.08523517703957,68.38767468739418],[43.08243558273989,68.3841985445109],[43.08432296383612,68.37788998890788],[43.08168061390393,68.375572560319],[43.07314255838559,68.38586356214672],[43.069681679027255,68.3865072923103],[43.0667555092906,68.38526274732742],[43.066314998436674,68.38328864149248],[43.06709409599651,68.38025619046853],[43.07791701510842,68.36686660306619],[43.08169199913112,68.36720992582008],[43.08510281801367,68.36839991744482]]]

    const polyline9 = [[[43.09530384901733,68.37314709302275],[43.0880290935661,68.38860037157406],[43.085156695062985,68.39838886148144],[43.08691817377089,68.40422534829781],[43.09144745619635,68.4076585758369],[43.09522160053875,68.40697193032906],[43.100756588498754,68.40353870279003],[43.10780038982744,68.40388202554392],[43.11459185376278,68.4025087345283],[43.133201604773134,68.38328266030953],[43.1286754333424,68.37092304116894],[43.132950159655,68.35890674478222],[43.132950159655,68.3475770939033],[43.13018419463593,68.34345722085642],[43.124651886642354,68.34071063882517],[43.121131064629665,68.3417406070869],[43.115912328053255,68.34839248544381],[43.11462329396033,68.34659004098583],[43.11845887600119,68.33036804086377],[43.11509489497153,68.31210756189036],[43.116399638696585,68.30983304864574],[43.12029798313792,68.30910348779369],[43.12108390937854,68.30678605920482],[43.12056519920057,68.30408239251778],[43.1162424421419,68.3006277073066],[43.11228095470162,68.3028163898628],[43.1092395165767,68.30780053772577],[43.10892508601278,68.31535363831168],[43.11137760126826,68.33423638977655],[43.108862199704774,68.34170365967402],[43.108673540390335,68.34985757507928],[43.111503368613384,68.35835481323845],[43.12043218480832,68.36144471802363],[43.12112379890904,68.36582208313592],[43.11848304816131,68.37019944824821],[43.11219508435881,68.37371850647577],[43.10490023111461,68.37097192444452],[43.09530384901733,68.37314709302275]]]

    const polyline11 = [[[42.74705238398124,69.010712709116],[42.7455183223117,69.00873860328107],[42.71131068609299,69.00280505637984],[42.71039288416831,69.00295526008468],[42.70963331361684,69.00357753257614],[42.70809831954985,69.00617391090256],[42.70752862130178,69.00754720191817],[42.70695891778729,69.01098042945726],[42.70714881954394,69.01278287391526],[42.708288217795534,69.01647359351975],[42.7115163984421,69.02196675758225],[42.712339240970984,69.02334004859786],[42.71261615665852,69.02453094940049],[42.71273483442935,69.02504593353133],[42.712837688312504,69.0258291385637],[42.71298801290982,69.02648359756331],[42.71321745500917,69.02729898910384],[42.71332821985478,69.02776032905442],[42.71366842492131,69.02831822852951],[42.71376336553485,69.02858644943099],[42.713834570899,69.02888685684067],[42.71375545382265,69.0291979930864],[42.7135260137267,69.0295198581682],[42.71327283745688,69.0299168251024],[42.713067130971616,69.0303030632005],[42.712837688312504,69.0319016597734],[42.71296340564474,69.03398482733321],[42.71302670012761,69.03484313421801],[42.71302670012761,69.035744356447],[42.70862757880092,69.04990642004559],[42.70334188821824,69.06745879583906],[42.70422814342011,69.06896083288741],[42.70511438587853,69.07175033026293],[42.706380424427415,69.07539813452317],[42.70723498574574,69.07913176947187],[42.707456536745845,69.08093421392992],[42.70761478697258,69.08376662664963],[42.70802623566027,69.0862128012712],[42.708849124794625,69.08745734625414],[42.71119113372738,69.08981769018723],[42.712395040495736,69.09161158924117],[42.7129963410042,69.09319945697796],[42.71688882865883,69.09779139881145],[42.71723692533105,69.10015174274459],[42.71783817858684,69.10156794910442],[42.72568557764999,69.11079474811568],[42.72705730765176,69.11169709914607],[42.73018958975503,69.11285581344055],[42.73854528200011,69.12026349991493],[42.74436568401192,69.12764493912393],[42.74613700147192,69.12944738358192],[42.749782022566194,69.1315538006201],[42.753617232444604,69.12932670762171],[42.75727172979502,69.13177852078115],[42.76207846457438,69.1346967641894],[42.77333487341055,69.13143519802726],[42.77586411996656,69.12834529324212],[42.7766228736446,69.12508372707998],[42.77396719480375,69.11804561062493],[42.77776098660398,69.11306743069328],[42.777887442298905,69.1092908804003],[42.77105846255204,69.08972148342764],[42.76663186685325,69.08542994900382],[42.764355207851004,69.07959346218745],[42.75866319164594,69.066547197539],[42.75474171852546,69.05762080593742],[42.752464619428494,69.05521754666007],[42.75094650654597,69.05229930325189],[42.74930184199066,69.04800776882807],[42.74930184199066,69.04405955715815],[42.750566972473145,69.04285792751946],[42.752211603215734,69.04354457302725],[42.75398269485674,69.04714946194328],[42.755121226848466,69.05023936672842],[42.757018733349895,69.05384425564445],[42.75803071288797,69.05727748318353],[42.75954865098279,69.06122569485345],[42.76220495252287,69.06277064724603],[42.76359630278927,69.05865077419915],[42.76296387475157,69.05247096462882],[42.761825487897106,69.04817943020501],[42.76056058890441,69.04491786404287],[42.758536696414545,69.04302958889642],[42.756512737338404,69.03959636135733],[42.7548682215599,69.03599147244135],[42.752717634600856,69.03221492214838],[42.75094650654597,69.02723674221673],[42.74930184199066,69.02122859402334],[42.748036685498455,69.0155637685839],[42.74705238398124,69.010712709116]]]

    const polyline12 = [[[42.5360254890997,68.75571523824082],[42.53585092992298,68.75556503453598],[42.53567637025477,68.7556186787163],[42.535581155683126,68.75581179776535],[42.53505739376207,68.75675609590003],[42.53490068480401,68.75690898181385],[42.534658677786766,68.75696262599418],[42.53454487653714,68.75711418062542],[42.53426914557326,68.75738240152694],[42.53419773303736,68.75761038929319],[42.53422550458886,68.75798858076428],[42.534233439315585,68.75824070841168],[42.534213602496905,68.75885493427607],[42.53428104765458,68.75903464228008],[42.53454487653714,68.75919021040295],[42.534826557262804,68.75918752819396],[42.53504277610655,68.75908023983334],[42.53510782128436,68.758949045641],[42.5351117885914,68.75874251554686],[42.53500665486942,68.75851184557158],[42.53499673658455,68.75846893022735],[42.53504434433742,68.7583884639569],[42.53520105293238,68.75826776455123],[42.53527841525727,68.7581524295636],[42.53539148309693,68.75789493749812],[42.536052915838546,68.75685833997656],[42.536233425299514,68.75670545406267],[42.53625326147196,68.75667058534547],[42.53630880272106,68.75649087734146],[42.53630880272106,68.75632189817355],[42.53626317955581,68.75616633005069],[42.536042997721054,68.75573449439929],[42.5360254890997,68.75571523824082]]]

    const polyline13 = [[[42.53549631581931,68.74620116279118],[42.535250343829155,68.74611533210272],[42.53508371708785,68.74611533210272],[42.534936926492314,68.74622262046329],[42.534698886950004,68.74624944255348],[42.53453622607044,68.74628699347966],[42.534302152348516,68.74648011252876],[42.53402443661696,68.74660885856144],[42.53384193703032,68.74654448554507],[42.53376258921641,68.74650157020086],[42.53361579549294,68.74657130763526],[42.53352454516536,68.74670541808597],[42.53349280588951,68.74696827456947],[42.53356421923733,68.7473384194135],[42.53368324130094,68.74777830169197],[42.53377449139495,68.74783194587222],[42.53391334997602,68.74784267470834],[42.5341394904281,68.74767637774936],[42.5342069356664,68.74767637774936],[42.53421883775966,68.74774075076573],[42.53419503357085,68.74783731029025],[42.533885578284696,68.74801433608528],[42.53374275224704,68.7481806330442],[42.53368720869912,68.74834693000312],[42.533722915271355,68.74887800738803],[42.53383003486472,68.74894774482243],[42.53393318689077,68.74890482947822],[42.534048240871236,68.74874389693733],[42.534242641939336,68.74843812510962],[42.534345793278945,68.74816990420814],[42.53443704239786,68.74788559005255],[42.53448861792741,68.74759591147891],[42.53456399747034,68.74729550406929],[42.534806004857145,68.74716675803654],[42.53507974977902,68.74716139361853],[42.53515909590725,68.74715066478247],[42.535282082205306,68.74723113105291],[42.535774024957874,68.74781048820012],[42.53594064984392,68.74791241214267],[42.53601378473017,68.74786949679846],[42.53608519517429,68.74761736915107],[42.536108998637374,68.74740815684788],[42.53607726068454,68.74705946967597],[42.53602568647657,68.74687707946296],[42.53561705854281,68.74624407813545],[42.53554564755948,68.74620116279118],[42.53549631581931,68.74620116279118]]]

    const polyline14 = [[42.79238856903239,68.23424883510545],[42.78821637821966,68.23648043300585],[42.78429678941704,68.23596544887496],[42.781641442074715,68.23287554408984],[42.77873307289049,68.23150225307421],[42.775065802575455,68.23150225307421],[42.77304238738177,68.23236055995899],[42.774433492480505,68.23373385097462],[42.77405410330219,68.23630877162891],[42.77253652317888,68.23802538539843],[42.77380117588276,68.24077196742968],[42.77455995501972,68.24386187221481],[42.77253652317888,68.24609347011521],[42.77051302474965,68.24660845424606],[42.769826791877016,68.24943126331078],[42.77060397758969,68.25277900494635],[42.77098338805612,68.25501060284675],[42.76326824843992,68.25895881451667],[42.76269906046285,68.26050376690924],[42.76295203354737,68.26222038067876],[42.76364770416511,68.26307868756355],[42.76484929851778,68.26239204205575],[42.766683265692244,68.2611045817286],[42.76782156263901,68.25878715313974],[42.7687701273338,68.25844383038583],[42.76908631231405,68.2603321055323],[42.76813775249629,68.26325034894049],[42.767651966899884,68.26494548766199],[42.76828434673268,68.26623294798915],[42.76904319394846,68.26820705382413],[42.76860053421057,68.27026699034754],[42.7672725358789,68.27129695860927],[42.76638718772619,68.26992366759364],[42.76638718772619,68.2682928845126],[42.76550182682821,68.2686362072665],[42.764932659520674,68.27026699034754],[42.76518562341874,68.27258441893642],[42.766007748901984,68.27644679991786],[42.767651966899884,68.2780775829989],[42.76860053421057,68.28022335021085],[42.76942261404488,68.28322742430751],[42.770687330792526,68.28434322325771],[42.77283728956827,68.28502986876555],[42.77302698820415,68.286918143912],[42.77302698820415,68.28846309630458],[42.774101936086076,68.28811977355069],[42.77625177547066,68.28640315978117],[42.776694380130074,68.28769062010832],[42.77732666697323,68.28940723387784],[42.77928671486141,68.28966472594325],[42.78017187729463,68.29052303282803],[42.78029832803035,68.29284046141692],[42.7811834758971,68.29387042967859],[42.78321241679775,68.29259295800163],[42.78504583631329,68.29267878869011],[42.78643666980903,68.29396624901726],[42.787637818862635,68.29568286278683],[42.788522861038125,68.29731364586787],[42.78972396931791,68.29739947655635],[42.79250539309701,68.29636950829462],[42.7947177993801,68.29619784691766],[42.79503385091746,68.29739947655635],[42.79509706102983,68.29877276757198],[42.79781503434264,68.2998027358337],[42.79977442888414,68.2998027358337],[42.80131875191357,68.3009768223509],[42.801192344426376,68.30269343612042],[42.80018107516414,68.30406672713605],[42.801192344426376,68.3053541874632],[42.8012555482025,68.30749995467512],[42.80277241931975,68.30955989119853],[42.80315163124617,68.31067569014874],[42.80220359704044,68.31290728804915],[42.80106593667903,68.31496722457256],[42.800686711876274,68.31745631453838],[42.79904337734441,68.31985957381573],[42.79891696517492,68.32131869551982],[42.801192344426376,68.32277781722392],[42.80220359704044,68.3239794468626],[42.80195078544768,68.32535273787822],[42.801192344426376,68.3270693516478],[42.800307484732365,68.3287859654173],[42.799928255247316,68.33058840987529],[42.79866414005556,68.32981593367903],[42.7975264141422,68.3291292881712],[42.79714716748882,68.33041674849835],[42.797399998851205,68.33179003951396],[42.79518768915094,68.33299166915265],[42.79373384225791,68.33384997603743],[42.79171104152746,68.33290583846417],[42.790509972086454,68.33256251571028],[42.78873993222554,68.33290583846417],[42.78741236887188,68.33342082259502]]

    const polyline15 = [[42.81197444732624,68.30035088854116],[42.81156369331421,68.30022214250843],[42.81110554136699,68.3002865155248],[42.81082116947353,68.30000756578723],[42.810915960251,68.29953549700065],[42.81143730691157,68.29936383562365],[42.8115478950281,68.29889176683707],[42.81135831527783,68.2986128170995],[42.81104234772669,68.29869864778797],[42.810757975540575,68.29887030916491],[42.810363011986276,68.29983590441027],[42.80996804589162,68.30069421129505],[42.809667869960684,68.30150960283558],[42.80935189371136,68.30213187532705],[42.808593544079606,68.3026468594579],[42.80796157889952,68.3028614361791],[42.80778778733489,68.30234645204821],[42.80804057490269,68.30159543352406],[42.807977378108276,68.30097316103259],[42.80778778733489,68.30067275362295],[42.80728220907773,68.30088733034411],[42.806808225681614,68.30071566896716],[42.80650803430537,68.30022214250843],[42.806286839720805,68.29927800493518],[42.80584444816171,68.29880593614854],[42.80513345505147,68.29854844408312],[42.804343453053484,68.29781888323107],[42.803553440894234,68.29657433824819],[42.80307942872123,68.29429982500358],[42.802289400303906,68.292583211234],[42.801309750954466,68.29060910539907],[42.80061450645389,68.2879483540563],[42.799255596755,68.284300549796],[42.799002773029294,68.28185437517445],[42.79824429560912,68.27983735399525],[42.79799146772139,68.27927945452015],[42.797106561920394,68.27842114763536],[42.79562115567142,68.27687619524279],[42.794155422593114,68.27528832750602],[42.793049219284434,68.27365754442492],[42.792417094166325,68.27237008409777],[42.79197460271433,68.2704818089513],[42.79052067979364,68.26867936449332],[42.78973048986466,68.26670525865833],[42.78897189797339,68.26434491472524],[42.78764433963073,68.26086877184194],[42.78672767546658,68.2584655125646],[42.78508396755476,68.25606225328724],[42.78195447905304,68.24992535906118]]

    const polyline16 = [[[43.29063939567646,70.79263162112795],[43.28938542402767,70.78782510257324],[43.28838222796189,70.78198861575686],[43.287504417734844,70.78164529300297],[43.286814700749055,70.78151654697024],[43.28593686773958,70.78391980624758],[43.284682798451726,70.78439187503422],[43.283522761179434,70.78700971103272],[43.283365997677215,70.78924130893313],[43.282550820907595,70.79147290683353],[43.281829693826154,70.79233121371827],[43.280105224595346,70.7970948169287],[43.28045012237956,70.79808186984623],[43.280167933429844,70.7987256000098],[43.27979024498135,70.798936529551],[43.279210182152205,70.79885069886252],[43.27903772996683,70.79782073060079],[43.278050039785676,70.79588954011012],[43.277595383322904,70.79382960358666],[43.27756402757867,70.79155509034204],[43.27668606013317,70.78833643952417],[43.27656063517094,70.78741375962302],[43.275259335824,70.78696314850855],[43.27408266881879,70.78735591616766],[43.27352517097813,70.79217463414527],[43.273509492051915,70.79363375584937],[43.27313319660218,70.79603701512667],[43.272067013435965,70.79732447545382],[43.271157607046675,70.79723864476534],[43.270875374694945,70.7959511844382],[43.2703109060372,70.79513579289767],[43.269401473221016,70.7953932849631],[43.26880563050729,70.79607993047094],[43.267864814262055,70.79668074529025],[43.26651086656289,70.80062028946257],[43.26458210426921,70.80433246673918],[43.264770278909694,70.80686447204927],[43.26647950506661,70.80714342178679],[43.26569546237129,70.80956813873625],[43.26673039658114,70.81289407791475],[43.26663631238523,70.81491109909395],[43.2684866080222,70.81482526840547],[43.26999189149799,70.8152973371921],[43.27005461082917,70.81671354355194],[43.269584214258664,70.81649896683074],[43.2689883733466,70.81804391922334],[43.268643410133585,70.82006094040254],[43.267483064876004,70.82096216263155],[43.2683611660402,70.822850437778],[43.268643410133585,70.82383749069552],[43.26811028129511,70.8244812208591],[43.268712916955394,70.82551978494216],[43.27053178962526,70.82766555215409],[43.2723506075537,70.82440398599195],[43.27329135396766,70.82440398599195],[43.2752982307022,70.82208655740313],[43.27548637197877,70.82114241982987],[43.27642706957427,70.82097075845292],[43.27648978222657,70.81916831399488],[43.27714826114583,70.81753753091384],[43.27959397715909,70.81496261025954],[43.28136549167088,70.81438325311234],[43.285088978134816,70.81497772418042],[43.286813305097496,70.81435545168895],[43.289446727637795,70.81014974795362],[43.289101881219786,70.80813272677442],[43.289666174333135,70.80654485903759],[43.28999876636601,70.804789013016],[43.29017902456224,70.80040091906761],[43.290766819290454,70.79732174311853],[43.290923563585075,70.79547638331627],[43.29063939567646,70.79263162112795]]]
    return (
        <>
            <Polygon positions = {polyline} />
            <Polygon positions = {polyline1} />
            <Polygon positions = {polyline2} />
            <Polygon positions = {polyline3} />
            <Polygon positions = {polyline5} />
            <Polygon positions = {polyline6} />
            <Polygon positions = {polyline7} />
            <Polygon positions = {polyline8} />
            <Polygon positions = {polyline9} />
            <Polygon positions = {polyline11} />
            <Polygon positions = {polyline12} />
            <Polygon positions = {polyline13} />
            <Polygon positions = {polyline14} />
            <Polygon positions = {polyline15} />
            <Polygon positions = {polyline16} />
        </>        
    )
};