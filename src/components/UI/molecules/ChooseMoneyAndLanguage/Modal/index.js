import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./style.css";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import LanguagesData from "../../../../data/Languages.json";
import MoneyData from "../../../../data/Money.json";
import Button from "@mui/material/Button";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Modal({ closeModal }) {
  const [value, setValue] = React.useState(0);

  const [language, setLanguage] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function chooseLanguage(e) {
    setLanguage(e);
    closeModal();
  }

  return (
    <Box sx={{ width: "100%" }}>
      <div className="flex justify-between relative">
        <div className="ml-[24px]">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              TabIndicatorProps={{ style: { background: "primary.main" } }}
            >
              <Tab
                label="Язык"
                sx={{ textTransform: "capitalize", fontWeight: "600" }}
                {...a11yProps(0)}
              />
              <Tab 
              label="Валюта" 
              sx={{ textTransform: "capitalize", fontWeight: "600" }}
              {...a11yProps(1)} />
            </Tabs>
          </Box>
        </div>
        <div className="-translate-y-4 translate-x-4">
          <IconButton aria-label="delete" size="large" onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </div>
      </div>
      <TabPanel value={value} index={0} sx={{ padding: "400px" }} p={0}>
        <div className="overflow-y-auto h-[500px]">
          <h2 className="text-[24px] font-medium text-[#131313] pb-4 ">
            Рекомендуемые языки
          </h2>
          <div className="grid max-sm:grid-cols-2 grid-cols-3 lg:grid-cols-4 gap-6 mb-2">
            {LanguagesData.filter(
              (item) => item.code == "ru" || item.code == "en"
            ).map((item) => (
              <button
                type="submit"
                onClick={function () {
                  chooseLanguage(item.code);
                }}
                className="text-left p-4 hover:bg-[#FFECEC] rounded-xl transition duration-300 ease-in-out"
              >
                {item.native}
              </button>
            ))}
          </div>
          <h2 className="text-[24px] font-medium text-[#131313] py-10 border-t">
            Выбрать язык
          </h2>
          <div className="grid max-sm:grid-cols-2 grid-cols-3 lg:grid-cols-4  gap-6">
            {LanguagesData &&
              LanguagesData.map((item) => (
                <button
                  type="submit"
                  onClick={function () {
                    chooseLanguage(item.code);
                  }}
                  className="text-left p-4 hover:bg-[#FFECEC] rounded-xl transition duration-300 ease-in-out"
                >
                  {item.native}
                </button>
              ))}
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="overflow-y-auto h-[500px]">
          <div className="grid max-sm:grid-cols-2 grid-cols-3 lg:grid-cols-4  gap-6">
            {MoneyData &&
              MoneyData.map((item) => (
                <button
                  type="submit"
                  onClick={function () {
                    chooseLanguage();
                  }}
                  className="text-left p-4 hover:bg-[#FFECEC] rounded-xl transition duration-300 ease-in-out"
                >
                  <p>{item.name}</p>
                  <p>{item.code} - {item.symbol}</p>
                </button>
              ))}

          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
