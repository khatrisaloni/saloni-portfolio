import c from '/public/svg/skills/c.svg';
import cplusplus from '/public/svg/skills/cplusplus.svg';
import css from '/public/svg/skills/css.svg';
import git from '/public/svg/skills/git.svg';
import html from '/public/svg/skills/html.svg';
import javascript from '/public/svg/skills/javascript.svg';
import mysql from '/public/svg/skills/mysql.svg';
import postgresql from '/public/svg/skills/postgresql.svg';
import python from '/public/svg/skills/python.svg';
import emmc from '/public/svg/skills/emmc.svg';
import sql from '/public/svg/skills/sql.svg';
import bitbucket from '/public/svg/skills/bitbucket.svg';
import jira from '/public/svg/skills/jira.svg';
import confluence from '/public/svg/skills/confluence.svg';
import ufs from '/public/svg/skills/ufs.svg';
import embeddedc from '/public/svg/skills/embeddedc.svg';
import oops from '/public/svg/skills/oops.svg';
import svn from '/public/svg/skills/svn.svg';
import tableau from '/public/svg/skills/tableau.svg';
import penthao from '/public/svg/skills/penthao.svg';
import sourcetree from '/public/svg/skills/sourcetree.svg';
import vscode from '/public/svg/skills/vscode.svg';
import ds from '/public/svg/skills/ds.svg';
import validation from '/public/svg/skills/validation.svg';
import firmware from '/public/svg/skills/firmware.svg';
import automation from '/public/svg/skills/automation.svg';
import manual from '/public/svg/skills/manual.svg';
import { CgBitbucket } from 'react-icons/cg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'sql':
      return sql;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'python':
      return python;
    case 'git':
      return git;
    case 'emmc':
      return emmc;
    case 'bitbucket':
      return bitbucket;
    case 'jira':
      return jira;
    case 'confluence':
      return confluence;
    case 'ufs':
      return ufs;
    case 'embedded c':
      return embeddedc;
    case 'oops':
      return oops;
    case 'svn':
      return svn;
    case 'tableau':
      return tableau;
    case 'pdi':
      return penthao;
    case 'sourcetree':
      return sourcetree;
    case 'vs code':
      return vscode;
    case 'ds algorithms':
      return ds;
    case 'validation':
      return validation;
    case 'firmware':
        return firmware;
    case 'automation testing':
      return automation;
    case 'manual testing':
      return manual;
    default:
      break;
  }
}
